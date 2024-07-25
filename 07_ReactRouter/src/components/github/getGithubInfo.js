export const getGithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/tusharjain24");
  return response;
};
