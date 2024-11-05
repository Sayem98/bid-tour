interface Iaddress {
  city: string;
  street: string;
  zip: string;
}
interface Iname {
  first: string;
  last: string;
}

interface Ilocation {
  lat: number;
  lng: number;
}

interface ItourSpot {
  id: string;
  name: string;
  description: string;
  location: Ilocation;
  photo: string;
  price: number;
}

interface IReview {
  tourId: string;
  reviewer: string;
  reviwe: string;
  review: string;
  rating: number;
}

interface Iuser {
  id: string;
  name: Iname;
  email: string;
  password: string;
  nidVerification: boolean;
  nid: string;
  phone: string;
  address: Iaddress;
  photo?: string;
}

interface ITouristModel extends Iuser {}

interface IProviderModel extends Iuser {
  tourSpots: ItourSpot[];
}

export {
  Iaddress,
  Iname,
  Ilocation,
  ItourSpot,
  IReview,
  Iuser,
  ITouristModel,
  IProviderModel,
};
