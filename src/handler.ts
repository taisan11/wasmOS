import login from './cmd/login';
import version from './cmd/version';

const Handler = {
    'init': async ()=>{
        console.log('システムにログインする');
        await login();
        console.log('ログイン完了');
    },
    // comandFuga:async()=>{
    //     console.log('comandFugaを実行');
    //     await Hogehoge.fuga();
    //     console.log('完了')
    // },
    'v': async()=>{
        console.log('オレオレコマンドなら、1文字のコマンドの方がいいよね');
        await version;
        console.log('表示完了');
    },
};
module.exports = Handler;
