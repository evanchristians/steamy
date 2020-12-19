import { Block } from "../Block";
import { SideBarContainerCSS, SideBarCSS } from "./styles";

export const SideBar = ({ children }) => {
  return (
    <SideBarContainerCSS>
      <Block>
        <SideBarCSS>{children}</SideBarCSS>
      </Block>
    </SideBarContainerCSS>
  );
};
