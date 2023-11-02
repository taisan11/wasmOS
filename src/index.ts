import pc from "picocolors"
import readline from 'readline';
import Handler from "./handler"

const start = async ()=>{

    await Handler.init();//起動と同時にやる処理

    //準備
    const reader = readline.createInterface({
        input: process.stdin,  // 標準入力
        output: process.stdout, // 標準出力
        prompt :'やること入力して> '
    });



    // Enterキー押下で読み込み
    reader.on('line', async (line) => {
        if(line !== ''){
            //入力を取得して、コマンドと引数に分ける
            const args = line.split(/\s+/);
            const cmd = args.shift();
            //Handlerの中の関数を実行する
            await Handler[cmd](args);       
        }else{
            console.log('');
        }
        reader.prompt();
    });

    // ctrl+Cで終了
    reader.on('close', () => {
        console.log("finish");
    });

    // コマンドプロンプトを表示
    reader.prompt();
}
//実行
start();



// import version from "./cmd/version"


// while (i == 1) {
//     console.log("Hello, world!");

//   }
  