interface Team {
  name: string
  points: number
}

const formatToString = (teams: Team[]): string =>
  teams.map(team => team.name).join('\n')

export const getResults = (division: Team[], n: number): string => {
  if (division.length < 2 * n)
    return `Error: division has only ${division.length} teams!`

  const sorted = [...division].sort((a, b) => b.points - a.points)

  const teamsToPromote = sorted.slice(0, n)
  const teamsToRelegate = sorted.slice(-n)

  return `Promote:\n${formatToString(
    teamsToPromote
  )}\n\nRelegate:\n${formatToString(teamsToRelegate)}`
}
