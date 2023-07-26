import Box from "@/components/Box";
import FilghtResultList from "./FilghtResultList";

export default async function FilghtResult() {
  return (
    <Box id="search-result" className="container mx-auto" stack>
      <Box id="search-params" className="bg-white my-2 shadow-container">
        <h1 className="p-6">搜索结果:</h1>
      </Box>
      <FilghtResultList />
    </Box>
  );
}
