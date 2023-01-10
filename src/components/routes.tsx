

export function AuthHeader({type}:{type:string}){
const info:{[key: string]: any} = {
    up:{name:"Sign Up", rev:"Sign In", link:"/signin"},
     in:{name:"Sign In",rev:"Sign Up", link:"/signup"}
    }

    return <div className="flex flex-row rounded-xl justify-around items-center w-full h-20 bg-slate-200 dark:bg-slate-800 p-3 gap-x-3">
          <h1>{info[type].name}</h1>
          <p>or</p>
            <a href={info[type].link}>{info[type].rev}</a>
          </div>
}