const fs = require('fs');
const output = fs.createWriteStream(`${__dirname}/text.txt`);
const { stdout, stdin } = process;


stdout.write ('Введите текст\n');
stdin.on ('data', data => {
  const text = data.toString().trim()
  if (text === 'exit'){
    stdout.write ('До свидания');
    process.exit()
  }else {
    output.write (data,'utf-8')
  }
})
process.addListener ('SIGINT',()=> {
    stdout.write ('Завершено с помощью комбинации клавиш');
    process.exit();
})