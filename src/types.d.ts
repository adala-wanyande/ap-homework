type MyComponentProps = {
  age: number;
};

type ContextType = {
  age: number;
};

type Age = number;
type Username = string;
type Password = string;

type SignUpForm = {
  firstName: string;
  lastName: string;
  age: number;
  password: string;
};

type Tribes = string[];

type MyButtonProps = {
  handleClick: () => void;
  count: number;
};

type Position = {
  x: number,
  y: number,
}

interface Item {
  title: string;
  id: number;
}

interface Place {
  id: number;
  title: string;
  childIds: number[];
}

interface PlacesById {
  [key: number]: Place;
}

interface PlaceTreeProps {
  id: number;
  parentId: number;
  placesById: PlacesById;
  onComplete: (parentId: number, childId: number) => void;
}
