import "./app.css";
import {useState,useEffect,useMemo} from 'react';
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
  
 const [questionNumber, setQuestionNumber] = useState(1);
 const [stop, setStop] = useState(false);
 const [earned, setEarned] = useState("$ 0");

 const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Who was the first Prime minister of India",
    answers: [
      {
        text: "Indira Gandhi",
        correct: false,
      },
      {
        text: "Narendra Modi",
        correct: false,
      },
      {
        text: "Jawaharlal Nehru",
        correct: true,
      },
      {
        text: "Rajiv Gandhi",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is the capital city of India",
    answers: [
      {
        text: "New Delhi",
        correct: true,
      },
      {
        text: "Mumbai",
        correct: false,
      },
      {
        text: "Kolkata",
        correct: false,
      },
      {
        text: "Chennai",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Who is Sachin Tendulkar?",
    answers: [
      {
        text: "Indian Hockey Player",
        correct: false,
      },
      {
        text: "Indian Cricketer",
        correct: true,
      },
      {
        text: "Indian Kabbadi player",
        correct: false,
      },
      {
        text: "Indian Marathon runner",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Who discovered India",
    answers: [
      {
        text: "Vasco da Gama",
        correct: true,
      },
      {
        text: "Chirstopher Columbus",
        correct: false,
      },
      {
        text: "James Cook",
        correct: false,
      },
      {
        text: "Willem janszoon",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "How many major religions are there in india",
    answers: [
      {
        text: "6",
        correct: true,
      },
      {
        text: "7",
        correct: false,
      },
      {
        text: "8",
        correct: false,
      },
      {
        text: "9",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Who wrote Vande Matram",
    answers: [
      {
        text: "Sarat Chandra Chattopadhyay",
        correct: false,
      },
      {
        text: "Rabindranath Tagore",
        correct: false,
      },
      {
        text: "Bankim Chandra Chatterjee",
        correct: true,
      },
      {
        text: "Ishwar Chandra Vidyasagar",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Which one of the following places is famous for the Great Vishnu Temple?",
    answers: [
      {
        text: "Bordubar, Indonesia",
        correct: false,
      },
      {
        text: "Bamiyan, Afghanistan",
        correct: false,
      },
      {
        text: "Panja Sahib, Pakistan",
        correct: false,
      },
      {
        text: "Ankorvat, Cambodia",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question: "Where is the largest Buddhist Monastery in India",
    answers: [
      {
        text: "Sarnath,Uttar Pradesh",
        correct: false,
      },
      {
        text: "Tawang,Arunachal Pradesh",
        correct: true,
      },
      {
        text: "Dharamshala, Himachal Pradesh",
        correct: false,
      },
      {
        text: "Gangtok,Sikkim",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Who among the following was killed during 'Operation Bluestar' of 1984?",
    answers: [
      {
        text: "Baba Santa Singh",
        correct: false,
      },
      {
        text: "Haji Mastan",
        correct: false,
      },
      {
        text: "Jarnail Singh Bhindrawale",
        correct: true,
      },
      {
        text: "Homi Jehangir Bhabha",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Which former Indian President died as a result of a road accident?",
    answers: [
      {
        text: "Rajendra Prasad",
        correct: false,
      },
      {
        text: "Faqruddin Ali Ahmed",
        correct: false,
      },
      {
        text: "Giani Zail Singh",
        correct: true,
      },
      {
        text: "R.Venkatraman",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Who was the first Indian woman to win a medal in the Olympics?",
    answers: [
      {
        text: "P.T. Usha",
        correct: false,
      },
      {
        text: "Kunjarani Devi",
        correct: false,
      },
      {
        text: "Bachendri Pal",
        correct: false,
      },
      {
        text: "Karnam Maleshwari",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "Which indian city is known as 'Silicon Valley of India'?",
    answers: [
      {
        text: "Delhi",
        correct: false,
      },
      {
        text: "Bangalore",
        correct: true,
      },
      {
        text: "Chennai",
        correct: false,
      },
      {
        text: "Mumbai",
        correct: false,
      },
    ],
  },
];
  
  const moneyPyramid = useMemo(()=> 
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
  []
);

  useEffect(()=>{
    questionNumber > 1 && 
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  },[questionNumber]);
  
  return (
    
    <div className="app">
     <div className="main">
     {stop ? (<h1 className="endText">You earned: {earned}</h1> ) : (
            <>
            <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div> 
           </div>
           <div className="bottom">
              <Trivia 
              data={data} 
              setStop={setStop} 
              questionNumber={questionNumber} 
              setQuestionNumber={setQuestionNumber}
              />
           </div> 
           </>
     ) }
     </div>
     <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
      </ul>
     </div>
    </div>
  );
}

export default App;
