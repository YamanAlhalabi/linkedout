export const endpoints: { [endpoint: string]: string } = {
  // Users
  createUser: "/api/user/create",
  modifyUser: "/api/user/modify",
  loginUser: "/api/user/login",
  getUser: "/api/user/get",
  findUser: "/api/user/find",

  // Companys
  createCompany: "/api/company/create",
};

export async function sendRequest<R = any>({
  args,
  method = "post",
  endpoint,
  auth = true,
}: Args) {
  const token = (await getGlobalConfig().getTokens()).token;

  const res = await fetch(withServerUrl(endpoint), {
    method: method,
    mode: "cors",
    headers: removeUndefined({
      Accept: "application/json",
      "Content-Type": "application/json",
      token: auth ? token : undefined,
    }) as any,
    body: JSON.stringify(args),
  });

  if (res.status !== 200) {
    throw Error("Status not success");
  }

  return (await res.json()) as R;
}

export function storeToken(token: string, userId: string) {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("userId", userId);
}

function removeUndefined(arg0: {
  Accept: string;
  "Content-Type": string;
  token: any;
}): any {
  throw new Error("Function not implemented.");
}
