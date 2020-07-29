enum historicalAge {
  PRE_HISTORIA = "100000 AC",
  IDADE_ANTIGA = "4000 AC",
  IDADE_MEDIA = "476 DC",
  IDADE_MODERNA = "1453 DC",
  IDADE_CONTEMPORANEA = "1789 DC",
}

const determinesHistoricalAge = (year: number, initials?: string): string => {
  if (year < 1 || !Number.isInteger(year)) return "Ano inválido!";

  const initialsUpperCase: string =
    (initials && initials.toUpperCase()) || "DC";
  if (
    initialsUpperCase &&
    initialsUpperCase !== "AC" &&
    initialsUpperCase !== "DC"
  )
    return "Sigla incorreta!";

  if (initialsUpperCase === "AC" && year >= 100000) return "Pré-história";
  if (
    (initialsUpperCase === "AC" && year < 100000) ||
    (initialsUpperCase === "DC" && year < 476)
  )
    return "Idade Antiga";
  if (initialsUpperCase === "DC" && year >= 1789) return "Idade Contemporânea";
  if (initialsUpperCase === "DC" && year >= 1453) return "Idade Moderna";

  return "Idade Média";
};

console.log(determinesHistoricalAge(1000));
