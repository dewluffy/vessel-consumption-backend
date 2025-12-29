import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@vessel.com";

  const exist = await prisma.user.findUnique({ where: { email } });
  if (exist) {
    console.log("Admin already exists");
    return;
  }

  const password = await bcrypt.hash("admin1234", 10);

  await prisma.user.create({
    data: {
      email,
      name: "System Admin",
      role: "ADMIN",
      password,
    },
  });

  console.log("Admin created");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
