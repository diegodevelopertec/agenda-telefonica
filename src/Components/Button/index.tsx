import { PropsComponents } from "../../Types/PropsComponentes"
import { Container } from "../Container"
import {Box} from './style'


export const Button=({...propsElement}:PropsComponents)=>{

    return <Box
    bgHover={propsElement.bgHover}
    bdHover={propsElement.bdHover}
    colorHover={propsElement.colorHover}
    pHover={propsElement.pHover}
    mHover={propsElement.mHover}
    opacityHover={propsElement.opacityHover}
    w={propsElement.w}
    h={propsElement.h}
    m={propsElement.m}
    mt={propsElement.mt}
    mb={propsElement.mb}
    ml={propsElement.ml}
    mr={propsElement.mr}
    p={propsElement.p}
    pt={propsElement.pt}
    pb={propsElement.pb}
    pl={propsElement.pl}
    pr={propsElement.pr}
    bg={propsElement.bg}
    bgImage={propsElement.bgImage}
    bgSize={propsElement.bgSize}
    opacity={propsElement.bgSize}
    d={propsElement.d}
    flexJustify={propsElement.flexJustify}
    flexAlign={propsElement.flexAlign}
    color={propsElement.color}
    textAlign={propsElement.textAlign}
    textTransform={propsElement.textTransform}
    overflow={propsElement.overflow}
    fontWeight={propsElement.fontWeight}
    fontSize={propsElement.fontSize}
    
    bd={propsElement.bd}
    bdTopLeft={propsElement.bdTopLeft}
    bdTopRight={propsElement.bdRadiusTopRight}
    bdBottomLeft={propsElement.bdBottomLeft}
    bdBottomRight={propsElement.bdBottomRight}
    bdRadius={propsElement.bdRadius}
    bdRadiusTopLeft={propsElement.bdRadiusTopLeft}
    bdRadiusTopRight={propsElement.bdRadiusTopLeft}
    bdRadiusBottomLeft={propsElement.bdRadiusBottomLeft}
    bdRadiusBottomRight={propsElement.bdBottomRight}
    boxShadow={propsElement.boxShadow}
    ps={propsElement.ps}
    psTop={propsElement.psTop}
    psLeft={propsElement.psLeft}
    psRight={propsElement.psRight}
    psBottom={propsElement.psBottom}
    onClick={propsElement.onClick}
    cursor={propsElement.cursor}
    
    
    >
        {propsElement.text}
        {propsElement.children}
    </Box>

}