import styled from "styled-components";


type PropsStyle={
    //Hover
    bgHover?:string,
    bdHover?:string,
    colorHover?:string,
    textDecorationHover?:string,
    pHover?:string,
    mHover?:string,
    opacityHover?:string

    //Tamanhos
    w?:string,
    h?:string,
    m?:string,
    mt?:string,
    mb?:string,
    ml?:string,
    mr?:string,
    p?:string,
    pt?:string,
    pb?:string,
    pl?:string,
    pr?:string,


    //Backgrounds
    bg?:string,
    bgImage?:string,
    bgSize?:string,
    opacity?:string,

    //colors e textos

    color?:string,
    textAlign?:string,
    textTransform?:string,
    overflow?:string,
    fontWeight?:string,
    fontSize?:string

    //border
    bd?:string,
    bdTopLeft?:string,
    bdTopRight?:string,
    bdBottomLeft?:string,
    bdBottomRight?:string,
    bdRadius?:string,
    bdRadiusTopLeft?:string,
    bdRadiusTopRight?:string,
    bdRadiusBottomLeft?:string,
    bdRadiusBottomRight?:string,
    boxShadow?:string


    //Position
    ps?:string,
    psTop?:string,
    psLeft?:string
    psRight?:string,
    psBottom?:string

    //flex
    d?:string,
    flexJustify?:string,
    flexAlign?:string
    flexDirection?:string,
    flex?:string
    gridRow?:string,
    gridColumn?:string,
    gTemplateAreas?:string
    gTemplateColumns?:string
    cursor?:string
   


}

export const Box=styled.button<PropsStyle>`
display: ${PropsStyle=>PropsStyle.d};
justify-content: ${PropsStyle=>PropsStyle.flexJustify};
align-items:  ${PropsStyle=>PropsStyle.flexAlign};
flex-direction:  ${PropsStyle=>PropsStyle.flexDirection};
border:  ${PropsStyle=>PropsStyle.bd};
border-radius:  ${PropsStyle=>PropsStyle.bdRadius};
border-bottom-left-radius: ${PropsStyle=>PropsStyle.bdRadiusBottomLeft};
border-bottom-right-radius: ${PropsStyle=>PropsStyle.bdRadiusBottomRight};
border-top-left-radius:  ${PropsStyle=>PropsStyle.bdRadiusTopLeft};
border-top-right-radius:  ${PropsStyle=>PropsStyle.bdRadiusTopRight};
background-color: ${PropsStyle=>PropsStyle.bg};
background-image:${PropsStyle=>PropsStyle.bgImage} ;
background-size: ${PropsStyle=>PropsStyle.bgSize};
width:  ${PropsStyle=>PropsStyle.w};
height:  ${PropsStyle=>PropsStyle.h};
margin:  ${PropsStyle=>PropsStyle.m};
margin-top:  ${PropsStyle=>PropsStyle.mt};
margin-bottom: ${PropsStyle=>PropsStyle.mb};
margin-left: ${PropsStyle=>PropsStyle.ml};
margin-right: ${PropsStyle=>PropsStyle.mr};
padding: ${PropsStyle=>PropsStyle.p};
padding-top:${PropsStyle=>PropsStyle.pt};
padding-bottom: ${PropsStyle=>PropsStyle.pb};
padding-left: ${PropsStyle=>PropsStyle.pl};
padding-right: ${PropsStyle=>PropsStyle.pr};
box-shadow: ${PropsStyle=>PropsStyle.boxShadow};
color: ${PropsStyle=>PropsStyle.color};
text-align: ${PropsStyle=>PropsStyle.textAlign};
text-transform: ${PropsStyle=>PropsStyle.textTransform};
overflow: ${PropsStyle=>PropsStyle.overflow};
font-weight: ${PropsStyle=>PropsStyle.fontWeight};
font-size: ${PropsStyle=>PropsStyle.fontSize};
padding: ${PropsStyle=>PropsStyle.pHover};
margin:  ${PropsStyle=>PropsStyle.mHover};
opacity: ${PropsStyle=>PropsStyle.opacity};

position: ${PropsStyle=>PropsStyle.ps};
top: ${PropsStyle=>PropsStyle.psTop};
left: ${PropsStyle=>PropsStyle.psLeft};
right: ${PropsStyle=>PropsStyle.psRight};
bottom: ${PropsStyle=>PropsStyle.psBottom};



&:hover{
    border:  ${PropsStyle=>PropsStyle.bdHover};
    background-color:${PropsStyle=>PropsStyle.bgHover};
    text-decoration: ${PropsStyle=>PropsStyle.textDecorationHover};
    color:${PropsStyle=>PropsStyle.colorHover};
    opacity: ${PropsStyle=>PropsStyle.opacityHover};
    cursor: ${PropsStyle=>PropsStyle.cursor};
  
}



@media screen and (max-width:950px){



}
`