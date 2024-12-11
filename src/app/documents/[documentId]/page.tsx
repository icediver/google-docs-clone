import Editor from "./_components/editor";
import Navbar from "./_components/navbar";
import { Toolbar } from "./_components/toolbar";

interface IDocumentIdPage {
  params: Promise<{ documentId: string }>;
}
export default async function DocumentIdPage({ params }: IDocumentIdPage) {
  const documentId = (await params).documentId;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden h-[112px]">
        <Navbar />
        <Toolbar />
      </div>

      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
}
