const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
book;

// //이것과
const title2 = book.title;
const author2 = book.author;
console.log(title2, author2);

//이것의 결과는 같다.
const { title, author } = book; //객체 파괴 방식
console.log(title, author);

const { publicationDate, pages, hasMovieAdaptation, genres } = book;
//이것과
const primaryGenre = genres[0];
const secondaryGenre = genres[1];
console.log(primaryGenre, secondaryGenre);

//이것의 결과는 같다.
const [primaryGenre2, secondaryGenre2] = genres; //배열 파괴 방식
console.log(primaryGenre2, secondaryGenre2);
//배열 끝에 추가하기
const newGenres = [...genres, "new genre!"];
newGenres;
//배열 처음에 추가하기
const newGenres2 = ["new genre!", ...genres];
newGenres2;

//객체를 가져와, 속성을 추가하고 기존 값을 업데이트 하기.
//기존에는 없던 moviePublicationDate 값이 추가되고, pages 의 값이 업데이트 된다.
//기존 값을 업데이트 시킬대는 순서가 중요하다. 덮어쓰기가 되기때문.
const updateBook = {
  ...book,

  // Adding new property
  moviePublicationDate: "2001-12-19",

  // Overwriting property
  pages: 1212,
};
updateBook;

// 문자열에서 변수값 사용 - templete literals
const summary = `${title} a ${pages}-page long book, was written by ${author} and pulished in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// 연산자
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(publicationDate));

// 화살표 함수
const getYear2 = (str) => str.split("-")[0];
console.log(getYear2(publicationDate));

const getYear3 = (str) => {
  return str.split("-")[0];
};
console.log(getYear3(publicationDate));

// true / false 를 가지고 || && 연산을 수행할 때, false 대신 사용할 수 있는 값들이 있다.
// falsy : 0, '', null, undefined
console.log("jonas" && "Some String");
console.log(0 && "Some String");

console.log(book.translations.spanish);
/*
 undefiend || 0 || '' || null 은 false 로 체크되기 때문에,
 book.translations.spanish === undefiend 와 같은 형식으로 참거짓을 비교하기보단, 
 아래와 같은 형태를 사용하면 자동으로  undefiend || 0 || '' || null 는 false 값으로 처리되어 해당 경우들을 제외시킬 수 있다.
 */
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

/*
 그러나 위처럼 사용할 경우 의도하지 않은 결과가 도출되는 상황이 생기기도 한다.
 예를 들어, 0 이라는 값도 값이라고 판단할 경우
 자바 스크립트에서는 0을 false 로 체크하기 때문에 값이 0이라면 false 의 결과가 나오게된다.
 이럴때 유용하게 사용할 수 있는 것이 nullish 이다. 물음표 두개로 사용할 수 있다. 
*/
const count = book.reviews.librarything.reviewsCount || "no data";
count; // 값이 0일 경우 no data 반환.

const count2 = book.reviews.librarything.reviewsCount ?? "no data";
count2; // 값이 0이면 0이 반환.

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;

  /* 
   예제 데이터에는 librarything 가 비어있는 data 들이 존재한다. 
   그래서 아래와 같이 작성했을 경우, librarything 가 비어있기 때문에 에러가 발생한다.
   const librarything = book.reviews.librarything.reviewsCount;
   옵셔널 체이닝인 ? 를 사용하여 null 일 수도 있음을 명시하면 에러가 발생하지 않는다. 
   librarything? 으로만 사용한다면 librarything은 아무것도 없는 상태가 되기 때문에 (NaN) 반환 값을 도출 해 낼 수는 없다. 
   그러니 null 혹은 undefiend 인 경우에 넣어줄 기본 값을 설정해준다. 
  */
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
// 데이터의 구조를 확실하게 알 지 못하는경우 옵셔널 체이닝을 사용하는 습관을 들이는 것이 좋다.
