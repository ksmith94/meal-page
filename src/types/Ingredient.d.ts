type Ingredient = {
  name: string;
  amount: number | string;
  unit?: string;
  preparation?: string;
  optional?: boolean
};

export default Ingredient;