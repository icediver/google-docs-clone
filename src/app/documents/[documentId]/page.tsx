import Editor from "./_components/editor";

interface IDocumentIdPage {
  params: Promise<{ documentId: string }>;
}
export default async function DocumentIdPage({ params }: IDocumentIdPage) {
  const documentId = (await params).documentId;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
}
