import { RootState } from "../../types/redux/store";

export const topicSelector = ({ discover }: RootState) => discover.topic;
