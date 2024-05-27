import express from 'express';
import axios from 'axios';
import cors from 'cors';
import cookieParser from 'cookie-parser';

let URI = "https://cbf70552-6cb6-4c5d-aa53-d275c83609db-00-25rotjqv5jmj7.spock.replit.dev";
const app = express();

/*app.use(async(req, res, next) => {
  URI = req.headers.referer.slice(0, -1)
  next(); 
});*/

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = `${URI}:3001/auth/callback/`;
const FRONTEND_URI = URI;

console.log(REDIRECT_URI)

app.use(cors({ origin: FRONTEND_URI, credentials: true }));
app.use(cookieParser());

app.get('/auth/user', (req, res) => {
  try {
    const userCookie = req.cookies.user;
    if (userCookie) {
      res.status(200).json(JSON.parse(userCookie));
    } else {
      res.status(404).json({ error: 'Usuário não autenticado' });
    }
  } catch (error) {
    console.error('Erro ao obter dados do usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/auth/discord', (req, res) => {
  const authUrl = `https://discord.com/oauth2/authorize?client_id=1244720819213439138&response_type=code&redirect_uri=https%3A%2F%2Fcbf70552-6cb6-4c5d-aa53-d275c83609db-00-25rotjqv5jmj7.spock.replit.dev%3A3001%2Fauth%2Fcallback%2F&scope=identify`;
  res.redirect(authUrl);
});

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokenResponse.data.access_token}`
      }
    });

    const user = userResponse.data;
    res.cookie('user', JSON.stringify(user), { httpOnly: true });
    res.redirect(FRONTEND_URI);
  } catch (error) {
    console.error(error);
    res.send('Erro durante a autenticação.');
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
