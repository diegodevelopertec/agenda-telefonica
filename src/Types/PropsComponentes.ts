import { ReactNode } from "react"

export type PropsComponents={
  

        type?:string
        value?:string,
        defaultValue?:string,
        onChange?:(e:any | null)=>any,
        onSubmit?:(e: any | null)=>any | void,
        id?:string
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
        fontSize?:string,
        fontFamilly?:string
    
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
        children?:ReactNode | JSX.Element,
        text?:string,
        href?:any,
        src?:string,
        placeholder?:string,
        outline?:string,
        
        outlineHover?:string,
        onClick?:()=>any,
        focus?:()=>any
        onTranisition?:()=>any,
        onAnimation?:()=>any,
        name?:string
        
        mqD?:string,
        mqDJustify?:string,
        mqDAlign?:string,
        mqM?:string,
        mqP?:string,
        mqDirection?:string
        mqW?:string,
        mqH?:string,
        mqFontSize?:string
        cursor?:string,
        method?:'GET' | 'POST',
        action?:string

    minW?:string,
    minH?:string,
    maxW?:string,
    maxH?:string,
    mqMxw?:string,
    mqMxh?:string,
    mqMnw?:string,
    mqMnh?:string
}