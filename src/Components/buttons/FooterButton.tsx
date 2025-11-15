import { FooterButtonType } from "@/types/buttonType";

interface FooterButtonProps{
data: FooterButtonType;
active: boolean;
clickButton:()=>void;

}

export const FooterButton=(props: FooterButtonProps)=>
{
    const {data,active,clickButton}=props;

return(
<div style={{
    color: active ? 'black' : 'gray',
    width: '50px',height: '50px',cursor: 'pointer'}}
    onClick={()=>clickButton()}>
        <div style={{display:"flex",justifyContent:"center"}}>
{
    data?.buttonImg && <img src={data?.buttonImg} alt={data.buttonText} width="30" height="30" />
}
</div>
<p>{data.buttonText}</p>


</div>
)
}