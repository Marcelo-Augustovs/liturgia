import { RiteVariation } from "./rite-variation.model"
import { topicList } from "./topic-list.model"

export interface contentSideMenu{
    menuTitle : string
    leftSubTitle: string
    rightSubTitle: string
    leftContent: topicList[]
    rightContent: RiteVariation[]
}