function areYouPlayingBanjo(name) {
    // Implement me
    return name.charAt(0).toLowerCase().includes("r")? name + " plays banjo": name + " does not play banjo";
    
  }
console.log(areYouPlayingBanjo("Ringo"));