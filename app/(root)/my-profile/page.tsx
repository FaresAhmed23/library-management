import Form from "next/form";
import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <>
      <Form
        action={async () => {
          "use server";

          await signOut();
        }}
        className={"mb-10"}
      >
        <Button>Logout</Button>
      </Form>

      <BookList title={"Borrowed Books"} books={sampleBooks} />
    </>
  );
};
export default Page;
