import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

const CocktailDetail = () => {
  const router = useRouter();
  const { pid } = router.query;
  const fetchDetailData = async () => {
    try {
      const response = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      console.log(response);
      setDrinks({ post: response.data.drinks });
      console.log(drinks, "drinks");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, []);
  return (
    <div>
      <div className="w-[300px] h-[200px] shadow-lg bg-white">
        <h1> ini halaman {pid}</h1>
      </div>
    </div>
  );
};

export default CocktailDetail;
