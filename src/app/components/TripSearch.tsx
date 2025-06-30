"use client";
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-[url('../../public/world-map.png')] bg-cover bg-no-repeat bg-center">
      <h1 className="text-roxo-dark font-semibold text-2xl text-center">
        Que tal uma <span className="text-roxo">viagem?</span>
      </h1>
      <div className="flex flex-col mt-5 gap-4 sm:flex-row sm:basis-auto sm:items-center sm:justify-center ">
        <Input placeholder="Onde quer ir?" />
        <div className=" flex gap-4 sm:flex-2">
          <DatePicker
            placeholderText="Quando quer ir?"
            onChange={() => {}}
            className="w-full"
          />
          <CurrencyInput placeholder="Qual o orçamento" />
        </div>
        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
