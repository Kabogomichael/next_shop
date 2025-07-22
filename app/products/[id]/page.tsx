import React from "react";
import BreadCrumbs from "@/components/single-products/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-products/AddToCart";
import ProductRating from "@/components/single-products/ProductRating";

const SingleProductPage = async({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id)
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8  lg:grid-cols-2 lg:">
        {/* IMAGE FIRST COL */}
        <div className="relative md:pl-24">
        {/* sizes="(max-with:768px) 100vw,(max-width:1200px) 50vw,33vw" */}
          <Image
            src={image}
            alt={name}
            priority
            width={400}
            height={400}
            className=" rounded object-cover "
          />
        </div>
        {/* PRODUCT INFO  SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold ">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2 ">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground ">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
