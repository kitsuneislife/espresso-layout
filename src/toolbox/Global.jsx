
const Toolbox = {
  miliarize: function(numstring, strict, char = ".") {
    try {
      if (typeof numstring === "number") {
        numstring = numstring.toString() || "0";
      }
      const split = numstring.split(".");
      [numstring] = split;
      let numstringExtra = split[1] || "";
      if (numstringExtra.length > 1) numstringExtra = ` .${numstringExtra}`;
      else numstringExtra = "";

      if (numstring.length < 4) return numstring;
      // -- -- -- -- --
      const stashe = numstring
        .replace(/\B(?=(\d{3})+(?!\d))/g, char)
        .toString();
      // informa precisao pf
      if (strict) {
        let stash = stashe;
        if (strict === "soft") {
          stash = stashe.split(char);
          switch (stash.length) {
            case 1:
              return stash + numstringExtra;
            case 2:
              if (stash[1] !== "000") break;
              return `${stash[0] + numstringExtra}K`;
            case 3:
              if (stash[2] !== "000") break;
              return `${stash[0] + char + stash[1][0] + stash[1][1] + numstringExtra
                }Mi`;
            case 4:
              if (stash[3] !== "000") break;
              return `${stash[0] + char + stash[1][0] + stash[1][1] + numstringExtra
                }Bi`;
            default:
              break;
          }
          return stashe + numstringExtra;
        }
        return stash;
      }
      // precisao nao eh tao relevante
      stash = stashe.split(char);
      switch (stash.length) {
        case 1:
          return stash.join(" ");
        case 2:
          if (stash[0].length <= 1) break;
          return `${stash[0]}K`;
        case 3:
          return `${stash[0]}Mi`;
        case 4:
          return `${stash[0]}Bi`;
        default:
          break;
      }
      return stashe + numstringExtra;
    } catch (err) {
      return "---";
    }
  }
}

export default Toolbox;