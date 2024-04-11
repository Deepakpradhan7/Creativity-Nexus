import CardList from "./components/cardList/cardList";
import CategoryList from "./components/categoryList/categoryList";
import Featured from "./components/featured/featured";
import Menu from "./components/menu/menu";
import MyFav from "./components/myFavourites/MyFav";

//@ts-ignore
export default function Home({searchParams}) {
   const page = parseInt(searchParams.page) || 1
  return (
   <div className="">
    <Featured/>
    <CategoryList/>
    <div className="flex gap-12">
      <CardList page={page} />
      <Menu/>
    </div>
    <MyFav />
   </div>
  );
}
