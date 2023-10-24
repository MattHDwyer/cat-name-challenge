export type People = {
  name: string;
  gender: Gender;
  age: number;
  pets: Pet[] | null;
};

export type Pet = {
  name: string;
  type: PetType;
};

export enum PetType {
  Dog = 'Dog',
  Cat = 'Cat',
  Fish = 'Fish',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}
