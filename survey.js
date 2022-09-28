// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, 
// prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (Nicknames are also acceptable)\n', (answer) => {
  rl.question('What\'s an activity you like doing?\n', (answer) => {
    rl.question('What do you listen to while doing that?\n', (answer) => {
      rl.question('Which meal is your favourite(eg: dinner, brunch, etc.)\n', (answer) => {
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
          rl.question('Which sport is your absolute favourite?\n', (answer) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.close();
            })
          })
        })
      });
    });
  });
});
 
 
  // rl.question('What\'s an activity you like doing?\n', (answer) => {
   
   
  //   rl.question('What do you listen to while doing that?\n', (answer) => {
      
      
  //     rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer) => {

  //       rl.question('What's your favourite thing to eat for that meal?\n', (answer) => {
          
          
  //         rl.question('Which sport is your absolute favourite?\n', (answer) => {
            
            
            
            
            
            
            
  //           rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
  //             console.log(`Thank you for your valuable feedback: ${answer}`);
  //             rl.close()})
  //           })
  //         })
  //       })
  //     })
  //   })

  // })





          
