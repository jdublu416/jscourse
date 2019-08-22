//Iterator example

// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     }
//   };
// }

// const namesArr = ['Jack', 'Jill', 'Andy', 'Anne'];

// //Init iterator
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);//It will iterate with the next() but this is tedious, you have to keep calling it until an undefined result lets you know that you are done iterating. (archaic)

//Generator example similar to an iterator but it is a function that can return multiple values, yield values.

// function* sayNames(){
//     yield "Jack";
//     yield "Jill";
//     yield "Andy";
//     yield "Anne";
// }
//     //assign a variable to this generator
//     const name = sayNames();
//     console.log(name.next().value);
//     console.log(name.next().value);
//     console.log(name.next().value);
//     console.log(name.next().value);

//lets say we want a generator to generate ids
    //ID creator:
    function* createIds(){
        let index = 0;
        while(true){
            yield index++;
        }
    }

    const gen = createIds();
    console.log(gen.next().value);//this starts 0, if you want ids to start at 1 you init the index to 1.
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);

    // every time you call the function it just adds one for the next value...this is a helpful function in a program, it will never end.

