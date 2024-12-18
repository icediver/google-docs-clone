import { auth } from "@clerk/nextjs/server";
import { Id } from "../../../../convex/_generated/dataModel";
import { Document } from "./_components/document";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

interface IDocumentIdPage {
  params: Promise<{ documentId: Id<"documents"> }>;
}
export default async function DocumentIdPage({ params }: IDocumentIdPage) {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    {
      id: documentId,
    },
    { token },
  );

  return <Document preloadedDocument={preloadedDocument} />;
}
