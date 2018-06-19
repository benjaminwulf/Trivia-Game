// var answerCorrect = false;
var userClick = "";

// VARIABLES WITH QUESTIONS AND BOOLEAN TO MAKE TRUE/FALSE
var carQuestions = [ {
         id: 1,
         question: "What are the three main ingredients to make a petrol engine run?",
         choices: {
            a: "Fuel, oil, spark",
            b: "Cooliant, radiator fluid, water",
            c: "Fuel, air, water",
            d: "Fuel, air, spark"
        }
    },
    {
        id: 2,
        question: "What appendage to the engine charges the battery?",
        choices: {
            a: "Starter Motor",
            b: "Alternator",
            c: "Power steering pump",
            d: "Airconditioning compressor"
        }
    },
    {
        id: 3,
        question: "What car is NOT manufactured by Ford Motor Company",
        choices: {
            a: "Mustang",
            b: "Bronco",
            c: "Edsel",
            d: "Grand Prix"
        }
    },
    {
         id: 4,
         question: "Name the component of an engine that opens and closes the valves on the overhead valve engine?",
         choices: {
            a: "Exhause",
            b: "Crankshaft",
            c: "Camshaft",
            d: "Piston"
        }
    },
    {
        id: 5,
        question: "What engine component allow leftover gasses escape the engine?",
        choices: {
            a: "Rotory Splint",
            b: "Exhaust",
            c: "Power steering pump",
            d: "Airconditioning compressor"
        }
    },
    {
        id: 6,
        question: "Acronym given to engines that have dual camshafts located at top of engine",
        choices: {
            a: "SOCH",
            b: "SOHC",
            c: "DOHC",
            d: "DODS"
        }
    },
    {
         id: 7,
         question: "Component that allows signals to travel from different sensors thoughout the engine to the computer",
         choices: {
            a: "Relays",
            b: "Flux Capacity",
            c: "Fuse box",
            d: "Wiring harness"
        }
    },
    {
        id: 8,
        question: "This automotive leader was not involved in designing Chevrolet Vega but gained credit largely due to recently becoming General Manager of Chevrolet devision at GM?",
        choices: {
            a: "John DeLorean",
            b: "Lee Iacocca",
            c: "Henry Ford II",
            d: "Batman"
        }
    },
    {
        id: 9,
        question: "what engine is not a Ford block?",
        choices: {
            a: "429 Shotgun",
            b: "350",
            c: "460 Big Block",
            d: "2.3"
        }
    },
    {
        id: 10,
        question: "What engine block is a Chevrolet engine?",
        choices: {
            a: "Hemi",
            b: "V Wedge",
            c: "454 Big Block",
            d: "6.2 SRT"
        }
    } ]
  
// GET ON CLICK EVENT AND MAP TO VARIALBLE
// HERE WE ARE CREATING VARIABLE WITH THE CONTENT OF THE carQuestions obj
var questionID = carQuestions.map(function(questionNum) {return questionNum.id;});
var questionDeclared = carQuestions.map(function(multChoice) {return multChoice.question;});
var questionChoice = carQuestions.map(function(multChoice) {return multChoice.choices;});

    var j = Math.floor(Math.random() * carQuestions.length);

    $(".question-number").html("<h4>" + questionID[j] + "</h4>");
    $(".question-asked").html("<h4>" + questionDeclared[j] + "<h4>");
    $(".text-a").html("<h4>" + questionChoice[j].a + "</h4>");
    $(".text-b").html("<h4>" + questionChoice[j].b + "</h4>");
    $(".text-c").html("<h4>" + questionChoice[j].c + "</h4>");
    $(".text-d").html("<h4>" + questionChoice[j].d + "</h4>");

        var userClickFunc = function(e) {
            var userClick = e.currentTarget.id;
            // console.log("Button click: " + e.currentTarget.id);
            console.log("this is the userclick", userClick);
            compareAnswer();
        }

        var clickA = $("#choice-a").on('click', userClickFunc);
        var clickB = $("#choice-b").on('click', userClickFunc);
        var clickC = $("#choice-c").on('click', userClickFunc);
        var clickD = $("#choice-d").on('click', userClickFunc);
      

// LOGIC
// UPON MATCH OR NOT MATCH
// SAVE SCORE "correctCounter" // "wrongCounter"
// DISPLAY COUNTER AT THE BOTTOM OF THE PAGE

var carKey = [{
        id: 1,
        click: "choice-a",
        value: "fuel, oil, spark"
         },
        {
        id: 2,
        click: "choice-b",
        value: "Alternator"
        },
        {
        id: 3,
        click: "choice-d",
        value: "Grand Prix"
        },
        {
        id: 4,
        click: "choice-c",
        value: "Camshaft"
        },
        {
        id: 5,
        click: "choice-b",
        value: "exhaust"
        },
        {
        id: 6,
        click: "choice-c",
        value: "DOHC"
        },
        {
        id: 7,
        click: "choice-d",
        value: "Wiring harness"
        }, 
        {
        id: 8,
        click: "choice-a",
        value: "John DeLorean"
        },
        {
        id: 9,
        click: "choice-b",
        value: "350"
        },
        {
        id: 10,
        click: "choice-d",
        value: "6.2 SRT"
    } ]
// Turn carKey.id into array that can be used in if statement
var answerIdArr = carKey.map(function(answerID) {return answerID.id;});
var answerClickArr = carKey.map(function(answerClick) {return answerClick.click});

// CHECK FOR MATCH OR NON MATCH AND CHANGE BUTTON TO GREEN OR RED
function compareAnswer() {
    // We are using "j" // It was created for above for mapping varibles
    if (questionID[j] == answerIdArr[j]) {

        if (answerClickArr[j] == userClick) {
            console.log("questionID[j]", questionID[j]);
            console.log("answerIdArr[j]", answerIdArr[j]);
            console.log("answerClickArr[j]", answerClickArr[j]);
            console.log("userClick", userClick);
        } else {
            console.log("something went wrong");
            console.log("questionID[j]", questionID[j]);
            console.log("answerIdArr[j]", answerIdArr[j]);
            console.log("answerClickArr[j]", answerClickArr[j]);
            console.log("userClick", userClick);
        }
    }
};

carImgArr = [
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-00-engine-hoist.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-01-pull-engine.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-02-dash-card-board.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-03-engine-detail.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-04-engine-in-frame.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-05-hood-cut-off.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-06-dash-alumninum.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-07-mohawk-hood.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-08-paint-red.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-09-race-seats.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-10-engine-buttoned-up.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-11-jeff-benji.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-12-gutted-engine-bay.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-13-interior-gutted.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-14-engine-pre-paint.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-15-hood.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-16-dynomat.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-17-paint-black.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-18-painted.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-19-rear-seat-delete.jpg"
]

$("#random-img").html('<img src="' + carImgArr[Math.floor(Math.random() * (carImgArr.length))] + '"width="360px" ">');
