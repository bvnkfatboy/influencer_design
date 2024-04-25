import * as bcrypt from "bcrypt";

export async function saltAndHashPassword({
  password,
}: {
  password: string;
}): Promise<string> {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}
