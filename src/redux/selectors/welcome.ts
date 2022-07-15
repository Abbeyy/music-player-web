import { RootState } from "../../types/redux/store";

export const topicSelector = ({ welcome }: RootState) => welcome.topic;
