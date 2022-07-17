// @ts-nocheck
export const RGBLogShade=(percentage: number, color: string)=>{
  var i=parseInt,r=Math.round,[a,b,color,d]=color.split(","),P=percentage<0,t=P?0:percentage*255**2,P=P?1+percentage:1-percentage;
  return"rgb"+(d?"a(":"(")+r((P*i(a[3]=="a"?a.slice(5):a.slice(4))**2+t)**0.5)+","+r((P*i(b)**2+t)**0.5)+","+r((P*i(color)**2+t)**0.5)+(d?","+d:")");
}
