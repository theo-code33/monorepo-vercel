import { Button, Header } from "ui";

export default function Page() {
  const school = process.env.NEXT_PUBLIC_SCHOOL;
  return (
    <>
      <Header text="Web" />
      <h1>{school}</h1>
      <Button />
    </>
  );
}
