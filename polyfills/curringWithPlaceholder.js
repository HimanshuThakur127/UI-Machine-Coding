const _ = Symbol('placeholder');

const isPlaceHolder = (value) => value === _ ;

const CurriedMethodWithPlaceholder = (fnc) => {
   const curried = (...args) => {
      if(args.every(arg => !isPlaceHolder(arg))){
        return fnc(...args);
      }
      return function(...moreArgs) {
        const finalArgs = args.map((arg) => isPlaceHolder(arg) ? moreArgs.shift(): arg);
        return curried(...finalArgs, ...moreArgs);
      }
   }
   return curried;
}