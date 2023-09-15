import { Title } from "./Title"

interface LogoProps {
    type: "desktop" | "mobile",
    footer?: boolean,
    withTitle?: boolean
}



export function Logo(props: LogoProps) {
    const DESKTOP = ( <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    fill="none"
  >
    <path
      fill={props.footer ? "black" : "red"}
      d="M48.928 18.992c-.48 0-.96.016-1.424.064-1.856.16-3.584.688-5.152 1.6-3.968 2.32-6.224 6.848-6.96 12.736-.72 5.696 0 12.768 1.936 20.608-7.76 2.208-14.24 5.088-18.816 8.544-4.72 3.584-7.504 7.824-7.504 12.448 0 4.624 2.784 8.864 7.504 12.448 4.576 3.456 11.056 6.352 18.816 8.56-1.936 7.84-2.656 14.896-1.936 20.592.736 5.888 2.992 10.416 6.96 12.736 1.904 1.104 4.064 1.664 6.416 1.664 1.488 0 3.056-.224 4.704-.656 6.16-1.648 13.024-6.4 19.936-13.168 6.912 6.768 13.776 11.52 19.936 13.168 1.648.432 3.216.656 4.704.656 2.336 0 4.512-.56 6.416-1.664 3.968-2.32 6.224-6.848 6.96-12.736.72-5.696 0-12.752-1.936-20.592 7.76-2.208 14.24-5.104 18.816-8.56 4.72-3.584 7.504-7.824 7.504-12.448 0-4.624-2.784-8.864-7.504-12.448-4.576-3.456-11.056-6.336-18.816-8.544 1.936-7.84 2.656-14.912 1.936-20.608-.736-5.888-2.992-10.416-6.96-12.736-3.12-1.824-6.912-2.128-11.12-1.008-6.16 1.648-13.024 6.4-19.936 13.168-6.912-6.768-13.776-11.52-19.936-13.168-1.584-.416-3.104-.64-4.544-.656Zm0 1.6c1.28.016 2.656.208 4.128.608 5.872 1.568 12.8 6.256 19.792 13.232a.8.8 0 0 0 1.12 0C80.96 27.456 87.888 22.768 93.76 21.2c3.904-1.056 7.184-.736 9.888.832 3.424 2 5.488 5.968 6.192 11.568.704 5.584.016 12.704-2.032 20.72a.803.803 0 0 0 .56.96c7.968 2.208 14.496 5.152 18.976 8.544 4.464 3.408 6.864 7.184 6.864 11.168 0 3.984-2.4 7.76-6.864 11.168-4.48 3.392-11.008 6.336-18.976 8.544a.803.803 0 0 0-.56.96c2.048 8.016 2.736 15.152 2.032 20.736-.704 5.584-2.768 9.552-6.192 11.552-1.648.96-3.504 1.44-5.6 1.44-1.328 0-2.768-.192-4.288-.608v.016c-5.872-1.584-12.8-6.272-19.792-13.248a.799.799 0 0 0-1.12 0c-6.992 6.976-13.92 11.664-19.792 13.248v-.016c-1.52.416-2.96.608-4.288.608-2.096 0-3.952-.48-5.6-1.44-3.424-2-5.488-5.968-6.192-11.552-.704-5.584-.016-12.72 2.032-20.736a.8.8 0 0 0-.56-.96c-7.968-2.208-14.496-5.152-18.976-8.544-4.464-3.408-6.864-7.184-6.864-11.168 0-3.984 2.4-7.76 6.864-11.168 4.48-3.392 11.008-6.336 18.976-8.544a.8.8 0 0 0 .56-.96c-2.048-8.016-2.736-15.136-2.032-20.72.704-5.6 2.768-9.568 6.192-11.568 1.344-.784 2.848-1.248 4.496-1.392.4-.048.832-.064 1.264-.048Zm-.128 3.2c-1.504 0-2.864.336-4.016 1.008-2.832 1.648-4.352 5.312-4.768 10.24-.432 4.944.256 11.248 2.112 18.512a.8.8 0 0 0 .96.576c5.04-1.136 10.544-1.984 16.4-2.512a.8.8 0 0 0 .576-.336c3.44-4.96 7.008-9.472 10.608-13.408a.8.8 0 0 0-.032-1.104c-6.48-6.496-12.848-10.992-18.416-12.48-1.216-.32-2.352-.496-3.424-.496Zm49.216 0c-1.072 0-2.208.176-3.424.496-5.568 1.488-11.936 5.984-18.416 12.48a.8.8 0 0 0-.032 1.104c3.6 3.936 7.168 8.448 10.608 13.408a.8.8 0 0 0 .576.336c5.856.528 11.36 1.376 16.4 2.512a.8.8 0 0 0 .96-.576c1.856-7.264 2.544-13.568 2.112-18.512-.416-4.928-1.936-8.592-4.768-10.24-1.152-.672-2.512-1.008-4.016-1.008Zm-49.216 1.6c.896 0 1.904.144 3.008.432C56.752 27.152 62.8 31.36 68.976 37.44a131.432 131.432 0 0 0-10 12.64c-5.488.512-10.64 1.312-15.424 2.368-1.68-6.816-2.336-12.768-1.952-17.264.4-4.688 1.856-7.76 3.984-9.008.896-.512 1.952-.784 3.216-.784Zm49.216 0c1.264 0 2.32.272 3.216.784 2.128 1.248 3.584 4.336 3.984 9.008.384 4.496-.272 10.448-1.952 17.264A129.103 129.103 0 0 0 87.84 50.08a131.432 131.432 0 0 0-10-12.64c6.176-6.08 12.224-10.288 17.168-11.616 1.104-.288 2.112-.432 3.008-.432ZM73.36 40.016a.8.8 0 0 0-.544.272c-2.64 2.912-5.264 6.144-7.84 9.632a.8.8 0 0 0 .688 1.264c2.544-.128 5.12-.192 7.744-.192 2.624 0 5.216.08 7.744.192a.8.8 0 0 0 .688-1.264c-2.576-3.488-5.2-6.72-7.84-9.632a.8.8 0 0 0-.64-.272Zm.048 2.08c2.032 2.288 4.064 4.8 6.064 7.456-2-.08-4-.16-6.064-.16s-4.064.08-6.064.16c2-2.656 4.032-5.168 6.064-7.456Zm0 12.096c-3.936 0-7.728.144-11.36.416a.8.8 0 0 0-.592.352 159.18 159.18 0 0 0-5.952 9.568 158.79 158.79 0 0 0-5.296 10.128.8.8 0 0 0 0 .688 163.195 163.195 0 0 0 5.296 10.128 163.802 163.802 0 0 0 5.936 9.552.799.799 0 0 0 .608.352c3.632.272 7.424.416 11.36.416 3.936 0 7.728-.144 11.36-.416a.8.8 0 0 0 .608-.352 163.802 163.802 0 0 0 5.936-9.552 163.195 163.195 0 0 0 5.296-10.128.801.801 0 0 0 0-.688 158.79 158.79 0 0 0-5.296-10.128v-.016a163.802 163.802 0 0 0-5.936-9.552.8.8 0 0 0-.608-.352 152.232 152.232 0 0 0-11.36-.416ZM56.016 55.2a.804.804 0 0 0-.128 0c-4.208.512-8.176 1.184-11.84 2a.801.801 0 0 0-.592 1.024c1.12 3.632 2.512 7.44 4.176 11.408a.8.8 0 0 0 1.456.048 164.337 164.337 0 0 1 3.632-6.752h.016a152.084 152.084 0 0 1 3.936-6.496.8.8 0 0 0-.656-1.232Zm34.816 0h-.064a.8.8 0 0 0-.624 1.232 170.733 170.733 0 0 1 3.952 6.496 175.485 175.485 0 0 1 3.632 6.752.8.8 0 0 0 1.456-.048 122.715 122.715 0 0 0 4.176-11.408.796.796 0 0 0-.291-.888.798.798 0 0 0-.301-.136c-3.664-.816-7.632-1.488-11.84-2a.81.81 0 0 0-.096 0Zm-17.424.592c3.76 0 7.36.144 10.848.4a149.295 149.295 0 0 1 5.664 9.12 152.814 152.814 0 0 1 5.056 9.68c-1.52 3.168-3.184 6.4-5.056 9.68a149.295 149.295 0 0 1-5.664 9.12 147.753 147.753 0 0 1-21.696 0 149.295 149.295 0 0 1-5.664-9.12 152.814 152.814 0 0 1-5.056-9.68c1.52-3.168 3.184-6.4 5.056-9.68a149.295 149.295 0 0 1 5.664-9.12c3.488-.256 7.088-.4 10.848-.4ZM54.4 57.072a141.856 141.856 0 0 0-3.056 5.072c-1.008 1.744-1.92 3.488-2.832 5.232-1.216-3.008-2.32-5.952-3.216-8.768 2.848-.608 5.92-1.104 9.104-1.536Zm38.016 0c3.184.432 6.24.928 9.088 1.552-.88 2.8-1.984 5.744-3.2 8.752-.912-1.744-1.824-3.488-2.832-5.232a141.856 141.856 0 0 0-3.056-5.072Zm-52.896 1.28a.8.8 0 0 0-.192.032c-7.2 1.984-13.008 4.528-17.072 7.344-4.048 2.832-6.448 5.984-6.448 9.264 0 3.28 2.4 6.432 6.448 9.264 4.064 2.816 9.872 5.36 17.072 7.344a.8.8 0 0 0 .976-.528c1.536-5.024 3.568-10.304 6.064-15.744a.8.8 0 0 0 0-.672c-2.496-5.44-4.528-10.72-6.064-15.744a.8.8 0 0 0-.784-.56Zm67.728 0a.8.8 0 0 0-.736.56c-1.536 5.024-3.568 10.304-6.064 15.744a.796.796 0 0 0 0 .672c2.496 5.44 4.528 10.72 6.064 15.744a.801.801 0 0 0 .976.528c7.2-1.984 13.008-4.528 17.072-7.344 4.048-2.832 6.448-5.984 6.448-9.264 0-3.28-2.4-6.432-6.448-9.264-4.064-2.816-9.872-5.36-17.072-7.344a.8.8 0 0 0-.24-.032ZM39.072 60.16a129.572 129.572 0 0 0 5.712 14.832 129.572 129.572 0 0 0-5.712 14.832c-6.72-1.92-12.192-4.304-15.904-6.88-3.824-2.672-5.76-5.472-5.76-7.952 0-2.48 1.936-5.28 5.76-7.952 3.712-2.576 9.184-4.96 15.904-6.88Zm68.672 0c6.72 1.92 12.192 4.304 15.904 6.88 3.824 2.672 5.76 5.472 5.76 7.952 0 2.48-1.936 5.28-5.76 7.952-3.712 2.576-9.184 4.96-15.904 6.88a129.572 129.572 0 0 0-5.712-14.832 129.572 129.572 0 0 0 5.712-14.832Zm-34.336 2.032c-7.056 0-12.8 5.744-12.8 12.8 0 7.056 5.744 12.8 12.8 12.8 7.056 0 12.8-5.744 12.8-12.8 0-7.056-5.744-12.8-12.8-12.8Zm0 3.2c5.328 0 9.6 4.272 9.6 9.6 0 5.328-4.272 9.6-9.6 9.6a9.567 9.567 0 0 1-9.6-9.6c0-5.328 4.272-9.6 9.6-9.6ZM48.384 79.856a.8.8 0 0 0-.752.496 122.688 122.688 0 0 0-4.176 11.408.8.8 0 0 0 .592 1.024c3.664.816 7.616 1.488 11.84 2a.8.8 0 0 0 .768-1.232 170.53 170.53 0 0 1-3.936-6.496 164.337 164.337 0 0 1-3.632-6.752.801.801 0 0 0-.704-.448Zm50.032 0a.8.8 0 0 0-.688.448 164.337 164.337 0 0 1-3.632 6.752 170.733 170.733 0 0 1-3.952 6.496.8.8 0 0 0 .784 1.232c4.208-.512 8.176-1.184 11.84-2a.798.798 0 0 0 .592-1.024c-1.12-3.632-2.512-7.44-4.176-11.408a.8.8 0 0 0-.768-.496Zm-49.904 2.752c.912 1.744 1.824 3.488 2.832 5.232a141.856 141.856 0 0 0 3.056 5.072c-3.184-.432-6.256-.928-9.088-1.552.88-2.8 1.984-5.744 3.2-8.752Zm49.792 0c1.216 3.008 2.32 5.952 3.2 8.752-2.832.624-5.904 1.12-9.088 1.552a141.856 141.856 0 0 0 3.056-5.072c1.008-1.744 1.92-3.488 2.832-5.232Zm5.616 13.232a.805.805 0 0 0-.192.016c-5.04 1.136-10.544 1.984-16.4 2.512a.8.8 0 0 0-.576.336c-3.44 4.96-7.008 9.472-10.608 13.408a.8.8 0 0 0 .032 1.104c6.48 6.496 12.848 10.992 18.416 12.48 2.912.784 5.456.656 7.44-.512 2.832-1.648 4.352-5.312 4.768-10.24.432-4.944-.256-11.248-2.128-18.512a.799.799 0 0 0-.752-.592Zm-60.992 0a.8.8 0 0 0-.8.592c-1.856 7.264-2.544 13.568-2.112 18.512.416 4.928 1.936 8.592 4.768 10.24 2 1.168 4.528 1.296 7.44.512 5.568-1.488 11.936-5.984 18.416-12.48a.8.8 0 0 0 .032-1.104c-3.6-3.936-7.168-8.448-10.608-13.408a.801.801 0 0 0-.576-.336c-5.856-.528-11.36-1.376-16.4-2.512a.804.804 0 0 0-.16-.016Zm60.336 1.696c1.68 6.816 2.336 12.768 1.952 17.264-.4 4.688-1.856 7.76-3.984 9.008-1.536.88-3.584 1.056-6.224.352-4.944-1.328-10.992-5.536-17.168-11.616a131.432 131.432 0 0 0 10-12.64 129.608 129.608 0 0 0 15.424-2.368Zm-59.712 0c4.784 1.056 9.936 1.856 15.424 2.368a131.432 131.432 0 0 0 10 12.64c-6.176 6.096-12.224 10.288-17.168 11.616-2.64.704-4.688.528-6.224-.352-2.128-1.248-3.584-4.32-3.984-9.008-.384-4.496.272-10.448 1.952-17.264ZM65.584 98.8a.8.8 0 0 0-.608 1.264c2.576 3.488 5.2 6.72 7.84 9.632a.805.805 0 0 0 .592.262.801.801 0 0 0 .592-.262c2.64-2.912 5.264-6.144 7.84-9.632a.8.8 0 0 0-.688-1.264c-2.544.128-5.12.192-7.744.192-2.624 0-5.2-.064-7.744-.192a.821.821 0 0 0-.08 0Zm1.76 1.632c2 .08 4 .16 6.064.16s4.064-.08 6.064-.16c-2 2.656-4.032 5.168-6.064 7.456-2.032-2.288-4.064-4.8-6.064-7.456Z"
    />
    <path
      fill="transparent"
      d="M68.35 79.63c3.433 2.36 6.863 2.36 10.29 0H68.35Zm1.12-6.98c0-.55.44-.99.99-.99s.99.44.99.99-.44.99-.99.99-.99-.44-.99-.99Zm6.09 0c0-.55.44-.99.99-.99s.99.44.99.99-.44.99-.99.99-.99-.44-.99-.99Zm-11.55 2.84c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5Zm0 0c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5Z"
    />
    <path
      stroke={props.footer ? "black" : "red"}
      d="M68.35 79.63c3.433 2.36 6.863 2.36 10.29 0m-9.17-6.98c0-.55.44-.99.99-.99s.99.44.99.99-.44.99-.99.99-.99-.44-.99-.99Zm6.09 0c0-.55.44-.99.99-.99s.99.44.99.99-.44.99-.99.99-.99-.44-.99-.99Zm-11.55 2.84c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5Z"
    />
  </svg>)

  const MOBILE = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={81}
    height={81}
    fill="none"
    {...props}
  >
    <path
      fill={props.footer ? "black" : "red"}
      fillOpacity={0.76}
      d="M28.464 12.496c-.24 0-.48.008-.712.032a6.111 6.111 0 0 0-2.576.8c-1.984 1.16-3.112 3.424-3.48 6.368-.36 2.848 0 6.384.968 10.304-3.88 1.104-7.12 2.544-9.408 4.272-2.36 1.792-3.752 3.912-3.752 6.224 0 2.312 1.392 4.432 3.752 6.224 2.288 1.728 5.528 3.176 9.408 4.28-.968 3.92-1.328 7.448-.968 10.296.368 2.944 1.496 5.208 3.48 6.368.952.552 2.032.832 3.208.832.744 0 1.528-.112 2.352-.328 3.08-.824 6.512-3.2 9.968-6.584 3.456 3.384 6.888 5.76 9.968 6.584a9.293 9.293 0 0 0 2.352.328c1.168 0 2.256-.28 3.208-.832 1.984-1.16 3.112-3.424 3.48-6.368.36-2.848 0-6.376-.968-10.296 3.88-1.104 7.12-2.552 9.408-4.28 2.36-1.792 3.752-3.912 3.752-6.224 0-2.312-1.392-4.432-3.752-6.224-2.288-1.728-5.528-3.168-9.408-4.272.968-3.92 1.328-7.456.968-10.304-.368-2.944-1.496-5.208-3.48-6.368-1.56-.912-3.456-1.064-5.56-.504-3.08.824-6.512 3.2-9.968 6.584-3.456-3.384-6.888-5.76-9.968-6.584a9.385 9.385 0 0 0-2.272-.328Zm0 .8c.64.008 1.328.104 2.064.304 2.936.784 6.4 3.128 9.896 6.616a.4.4 0 0 0 .56 0c3.496-3.488 6.96-5.832 9.896-6.616 1.952-.528 3.592-.368 4.944.416 1.712 1 2.744 2.984 3.096 5.784.352 2.792.008 6.352-1.016 10.36a.4.4 0 0 0 .28.48c3.984 1.104 7.248 2.576 9.488 4.272 2.232 1.704 3.432 3.592 3.432 5.584 0 1.992-1.2 3.88-3.432 5.584-2.24 1.696-5.504 3.168-9.488 4.272a.4.4 0 0 0-.28.48c1.024 4.008 1.368 7.576 1.016 10.368-.352 2.792-1.384 4.776-3.096 5.776-.824.48-1.752.72-2.8.72a8.142 8.142 0 0 1-2.144-.304v.008c-2.936-.792-6.4-3.136-9.896-6.624a.4.4 0 0 0-.56 0c-3.496 3.488-6.96 5.832-9.896 6.624v-.008c-.76.208-1.48.304-2.144.304-1.048 0-1.976-.24-2.8-.72-1.712-1-2.744-2.984-3.096-5.776-.352-2.792-.008-6.36 1.016-10.368a.4.4 0 0 0-.28-.48c-3.984-1.104-7.248-2.576-9.488-4.272-2.232-1.704-3.432-3.592-3.432-5.584 0-1.992 1.2-3.88 3.432-5.584 2.24-1.696 5.504-3.168 9.488-4.272a.4.4 0 0 0 .28-.48c-1.024-4.008-1.368-7.568-1.016-10.36.352-2.8 1.384-4.784 3.096-5.784a5.329 5.329 0 0 1 2.248-.696c.2-.024.416-.032.632-.024Zm-.064 1.6c-.752 0-1.432.168-2.008.504-1.416.824-2.176 2.656-2.384 5.12-.216 2.472.128 5.624 1.056 9.256a.4.4 0 0 0 .48.288c2.52-.568 5.272-.992 8.2-1.256a.399.399 0 0 0 .288-.168c1.72-2.48 3.504-4.736 5.304-6.704a.4.4 0 0 0-.016-.552c-3.24-3.248-6.424-5.496-9.208-6.24-.608-.16-1.176-.248-1.712-.248Zm24.608 0c-.536 0-1.104.088-1.712.248-2.784.744-5.968 2.992-9.208 6.24a.4.4 0 0 0-.016.552c1.8 1.968 3.584 4.224 5.304 6.704a.4.4 0 0 0 .288.168c2.928.264 5.68.688 8.2 1.256a.4.4 0 0 0 .48-.288c.928-3.632 1.272-6.784 1.056-9.256-.208-2.464-.968-4.296-2.384-5.12-.576-.336-1.256-.504-2.008-.504Zm-24.608.8c.448 0 .952.072 1.504.216 2.472.664 5.496 2.768 8.584 5.808a65.716 65.716 0 0 0-5 6.32c-2.744.256-5.32.656-7.712 1.184-.84-3.408-1.168-6.384-.976-8.632.2-2.344.928-3.88 1.992-4.504.448-.256.976-.392 1.608-.392Zm24.608 0c.632 0 1.16.136 1.608.392 1.064.624 1.792 2.168 1.992 4.504.192 2.248-.136 5.224-.976 8.632a64.554 64.554 0 0 0-7.712-1.184 65.716 65.716 0 0 0-5-6.32c3.088-3.04 6.112-5.144 8.584-5.808a6.026 6.026 0 0 1 1.504-.216ZM40.68 23.008a.4.4 0 0 0-.272.136 62.208 62.208 0 0 0-3.92 4.816.4.4 0 0 0 .344.632 76.973 76.973 0 0 1 3.872-.096c1.312 0 2.608.04 3.872.096a.4.4 0 0 0 .344-.632A62.208 62.208 0 0 0 41 23.144a.4.4 0 0 0-.32-.136Zm.024 1.04a59.892 59.892 0 0 1 3.032 3.728c-1-.04-2-.08-3.032-.08s-2.032.04-3.032.08c1-1.328 2.016-2.584 3.032-3.728Zm0 6.048c-1.968 0-3.864.072-5.68.208a.4.4 0 0 0-.296.176 79.59 79.59 0 0 0-2.976 4.784 79.395 79.395 0 0 0-2.648 5.064.4.4 0 0 0 0 .344 81.598 81.598 0 0 0 2.648 5.064 81.901 81.901 0 0 0 2.968 4.776.4.4 0 0 0 .304.176c1.816.136 3.712.208 5.68.208 1.968 0 3.864-.072 5.68-.208a.4.4 0 0 0 .304-.176 81.901 81.901 0 0 0 2.968-4.776 81.598 81.598 0 0 0 2.648-5.064.4.4 0 0 0 0-.344 79.395 79.395 0 0 0-2.648-5.064v-.008a81.901 81.901 0 0 0-2.968-4.776.4.4 0 0 0-.304-.176 76.116 76.116 0 0 0-5.68-.208Zm-8.696.504a.402.402 0 0 0-.064 0 61.54 61.54 0 0 0-5.92 1 .4.4 0 0 0-.296.512 62.193 62.193 0 0 0 2.088 5.704.4.4 0 0 0 .728.024 82.168 82.168 0 0 1 1.816-3.376h.008a76.042 76.042 0 0 1 1.968-3.248.4.4 0 0 0-.328-.616Zm17.408 0h-.032a.399.399 0 0 0-.312.616 85.367 85.367 0 0 1 1.976 3.248 87.743 87.743 0 0 1 1.816 3.376.4.4 0 0 0 .728-.024 61.344 61.344 0 0 0 2.088-5.704.398.398 0 0 0-.145-.444.4.4 0 0 0-.151-.068 61.54 61.54 0 0 0-5.92-1 .384.384 0 0 0-.048 0Zm-8.712.296c1.88 0 3.68.072 5.424.2a74.648 74.648 0 0 1 2.832 4.56 76.407 76.407 0 0 1 2.528 4.84 76.407 76.407 0 0 1-2.528 4.84 74.648 74.648 0 0 1-2.832 4.56 73.877 73.877 0 0 1-10.848 0 74.648 74.648 0 0 1-2.832-4.56 76.407 76.407 0 0 1-2.528-4.84c.76-1.584 1.592-3.2 2.528-4.84a74.648 74.648 0 0 1 2.832-4.56c1.744-.128 3.544-.2 5.424-.2Zm-9.504.64a70.928 70.928 0 0 0-1.528 2.536c-.504.872-.96 1.744-1.416 2.616a62.028 62.028 0 0 1-1.608-4.384 61.903 61.903 0 0 1 4.552-.768Zm19.008 0c1.592.216 3.12.464 4.544.776-.44 1.4-.992 2.872-1.6 4.376-.456-.872-.912-1.744-1.416-2.616a70.928 70.928 0 0 0-1.528-2.536Zm-26.448.64a.4.4 0 0 0-.096.016c-3.6.992-6.504 2.264-8.536 3.672-2.024 1.416-3.224 2.992-3.224 4.632 0 1.64 1.2 3.216 3.224 4.632 2.032 1.408 4.936 2.68 8.536 3.672a.4.4 0 0 0 .488-.264c.768-2.512 1.784-5.152 3.032-7.872a.4.4 0 0 0 0-.336c-1.248-2.72-2.264-5.36-3.032-7.872a.4.4 0 0 0-.392-.28Zm33.864 0a.4.4 0 0 0-.368.28c-.768 2.512-1.784 5.152-3.032 7.872a.4.4 0 0 0 0 .336c1.248 2.72 2.264 5.36 3.032 7.872a.4.4 0 0 0 .488.264c3.6-.992 6.504-2.264 8.536-3.672 2.024-1.416 3.224-2.992 3.224-4.632 0-1.64-1.2-3.216-3.224-4.632-2.032-1.408-4.936-2.68-8.536-3.672a.4.4 0 0 0-.12-.016Zm-34.088.904a64.786 64.786 0 0 0 2.856 7.416 64.786 64.786 0 0 0-2.856 7.416c-3.36-.96-6.096-2.152-7.952-3.44-1.912-1.336-2.88-2.736-2.88-3.976 0-1.24.968-2.64 2.88-3.976 1.856-1.288 4.592-2.48 7.952-3.44Zm34.336 0c3.36.96 6.096 2.152 7.952 3.44 1.912 1.336 2.88 2.736 2.88 3.976 0 1.24-.968 2.64-2.88 3.976-1.856 1.288-4.592 2.48-7.952 3.44a64.786 64.786 0 0 0-2.856-7.416 64.786 64.786 0 0 0 2.856-7.416Zm-17.168 1.016a6.408 6.408 0 0 0-6.4 6.4c0 3.528 2.872 6.4 6.4 6.4 3.528 0 6.4-2.872 6.4-6.4 0-3.528-2.872-6.4-6.4-6.4Zm0 1.6c2.664 0 4.8 2.136 4.8 4.8 0 2.664-2.136 4.8-4.8 4.8a4.783 4.783 0 0 1-4.8-4.8c0-2.664 2.136-4.8 4.8-4.8Zm-12.512 7.232a.4.4 0 0 0-.376.248 61.344 61.344 0 0 0-2.088 5.704.4.4 0 0 0 .296.512 61.12 61.12 0 0 0 5.92 1 .4.4 0 0 0 .384-.616 85.265 85.265 0 0 1-1.968-3.248 82.168 82.168 0 0 1-1.816-3.376.4.4 0 0 0-.352-.224Zm25.016 0a.4.4 0 0 0-.344.224 82.168 82.168 0 0 1-1.816 3.376 85.367 85.367 0 0 1-1.976 3.248.4.4 0 0 0 .392.616 61.54 61.54 0 0 0 5.92-1 .4.4 0 0 0 .296-.512 62.193 62.193 0 0 0-2.088-5.704.4.4 0 0 0-.384-.248Zm-24.952 1.376c.456.872.912 1.744 1.416 2.616a70.928 70.928 0 0 0 1.528 2.536c-1.592-.216-3.128-.464-4.544-.776.44-1.4.992-2.872 1.6-4.376Zm24.896 0c.608 1.504 1.16 2.976 1.6 4.376-1.416.312-2.952.56-4.544.776a70.928 70.928 0 0 0 1.528-2.536c.504-.872.96-1.744 1.416-2.616Zm2.808 6.616a.402.402 0 0 0-.096.008c-2.52.568-5.272.992-8.2 1.256a.399.399 0 0 0-.288.168c-1.72 2.48-3.504 4.736-5.304 6.704a.4.4 0 0 0 .016.552c3.24 3.248 6.424 5.496 9.208 6.24 1.456.392 2.728.328 3.72-.256 1.416-.824 2.176-2.656 2.384-5.12.216-2.472-.128-5.624-1.064-9.256a.4.4 0 0 0-.376-.296Zm-30.496 0a.4.4 0 0 0-.4.296c-.928 3.632-1.272 6.784-1.056 9.256.208 2.464.968 4.296 2.384 5.12 1 .584 2.264.648 3.72.256 2.784-.744 5.968-2.992 9.208-6.24a.4.4 0 0 0 .016-.552c-1.8-1.968-3.584-4.224-5.304-6.704a.4.4 0 0 0-.288-.168c-2.928-.264-5.68-.688-8.2-1.256a.405.405 0 0 0-.08-.008Zm30.168.848c.84 3.408 1.168 6.384.976 8.632-.2 2.344-.928 3.88-1.992 4.504-.768.44-1.792.528-3.112.176-2.472-.664-5.496-2.768-8.584-5.808a65.716 65.716 0 0 0 5-6.32 64.807 64.807 0 0 0 7.712-1.184Zm-29.856 0c2.392.528 4.968.928 7.712 1.184a65.716 65.716 0 0 0 5 6.32c-3.088 3.048-6.112 5.144-8.584 5.808-1.32.352-2.344.264-3.112-.176C25.728 64.28 25 62.744 24.8 60.4c-.192-2.248.136-5.224.976-8.632Zm11.016.632a.4.4 0 0 0-.304.632 62.208 62.208 0 0 0 3.92 4.816.4.4 0 0 0 .592 0 62.208 62.208 0 0 0 3.92-4.816.4.4 0 0 0-.344-.632c-1.272.064-2.56.096-3.872.096a76.973 76.973 0 0 1-3.912-.096Zm.88.816c1 .04 2 .08 3.032.08s2.032-.04 3.032-.08a59.892 59.892 0 0 1-3.032 3.728 59.892 59.892 0 0 1-3.032-3.728Z"
    />
    <path
      fill={props.footer ? "black" : "red"}
      fillOpacity={0.76}
      d="M28.464 12.496c-.24 0-.48.008-.712.032a6.111 6.111 0 0 0-2.576.8c-1.984 1.16-3.112 3.424-3.48 6.368-.36 2.848 0 6.384.968 10.304-3.88 1.104-7.12 2.544-9.408 4.272-2.36 1.792-3.752 3.912-3.752 6.224 0 2.312 1.392 4.432 3.752 6.224 2.288 1.728 5.528 3.176 9.408 4.28-.968 3.92-1.328 7.448-.968 10.296.368 2.944 1.496 5.208 3.48 6.368.952.552 2.032.832 3.208.832.744 0 1.528-.112 2.352-.328 3.08-.824 6.512-3.2 9.968-6.584 3.456 3.384 6.888 5.76 9.968 6.584a9.293 9.293 0 0 0 2.352.328c1.168 0 2.256-.28 3.208-.832 1.984-1.16 3.112-3.424 3.48-6.368.36-2.848 0-6.376-.968-10.296 3.88-1.104 7.12-2.552 9.408-4.28 2.36-1.792 3.752-3.912 3.752-6.224 0-2.312-1.392-4.432-3.752-6.224-2.288-1.728-5.528-3.168-9.408-4.272.968-3.92 1.328-7.456.968-10.304-.368-2.944-1.496-5.208-3.48-6.368-1.56-.912-3.456-1.064-5.56-.504-3.08.824-6.512 3.2-9.968 6.584-3.456-3.384-6.888-5.76-9.968-6.584a9.385 9.385 0 0 0-2.272-.328Zm0 .8c.64.008 1.328.104 2.064.304 2.936.784 6.4 3.128 9.896 6.616a.4.4 0 0 0 .56 0c3.496-3.488 6.96-5.832 9.896-6.616 1.952-.528 3.592-.368 4.944.416 1.712 1 2.744 2.984 3.096 5.784.352 2.792.008 6.352-1.016 10.36a.4.4 0 0 0 .28.48c3.984 1.104 7.248 2.576 9.488 4.272 2.232 1.704 3.432 3.592 3.432 5.584 0 1.992-1.2 3.88-3.432 5.584-2.24 1.696-5.504 3.168-9.488 4.272a.4.4 0 0 0-.28.48c1.024 4.008 1.368 7.576 1.016 10.368-.352 2.792-1.384 4.776-3.096 5.776-.824.48-1.752.72-2.8.72a8.142 8.142 0 0 1-2.144-.304v.008c-2.936-.792-6.4-3.136-9.896-6.624a.4.4 0 0 0-.56 0c-3.496 3.488-6.96 5.832-9.896 6.624v-.008c-.76.208-1.48.304-2.144.304-1.048 0-1.976-.24-2.8-.72-1.712-1-2.744-2.984-3.096-5.776-.352-2.792-.008-6.36 1.016-10.368a.4.4 0 0 0-.28-.48c-3.984-1.104-7.248-2.576-9.488-4.272-2.232-1.704-3.432-3.592-3.432-5.584 0-1.992 1.2-3.88 3.432-5.584 2.24-1.696 5.504-3.168 9.488-4.272a.4.4 0 0 0 .28-.48c-1.024-4.008-1.368-7.568-1.016-10.36.352-2.8 1.384-4.784 3.096-5.784a5.329 5.329 0 0 1 2.248-.696c.2-.024.416-.032.632-.024Zm-.064 1.6c-.752 0-1.432.168-2.008.504-1.416.824-2.176 2.656-2.384 5.12-.216 2.472.128 5.624 1.056 9.256a.4.4 0 0 0 .48.288c2.52-.568 5.272-.992 8.2-1.256a.399.399 0 0 0 .288-.168c1.72-2.48 3.504-4.736 5.304-6.704a.4.4 0 0 0-.016-.552c-3.24-3.248-6.424-5.496-9.208-6.24-.608-.16-1.176-.248-1.712-.248Zm24.608 0c-.536 0-1.104.088-1.712.248-2.784.744-5.968 2.992-9.208 6.24a.4.4 0 0 0-.016.552c1.8 1.968 3.584 4.224 5.304 6.704a.4.4 0 0 0 .288.168c2.928.264 5.68.688 8.2 1.256a.4.4 0 0 0 .48-.288c.928-3.632 1.272-6.784 1.056-9.256-.208-2.464-.968-4.296-2.384-5.12-.576-.336-1.256-.504-2.008-.504Zm-24.608.8c.448 0 .952.072 1.504.216 2.472.664 5.496 2.768 8.584 5.808a65.716 65.716 0 0 0-5 6.32c-2.744.256-5.32.656-7.712 1.184-.84-3.408-1.168-6.384-.976-8.632.2-2.344.928-3.88 1.992-4.504.448-.256.976-.392 1.608-.392Zm24.608 0c.632 0 1.16.136 1.608.392 1.064.624 1.792 2.168 1.992 4.504.192 2.248-.136 5.224-.976 8.632a64.554 64.554 0 0 0-7.712-1.184 65.716 65.716 0 0 0-5-6.32c3.088-3.04 6.112-5.144 8.584-5.808a6.026 6.026 0 0 1 1.504-.216ZM40.68 23.008a.4.4 0 0 0-.272.136 62.208 62.208 0 0 0-3.92 4.816.4.4 0 0 0 .344.632 76.973 76.973 0 0 1 3.872-.096c1.312 0 2.608.04 3.872.096a.4.4 0 0 0 .344-.632A62.208 62.208 0 0 0 41 23.144a.4.4 0 0 0-.32-.136Zm.024 1.04a59.892 59.892 0 0 1 3.032 3.728c-1-.04-2-.08-3.032-.08s-2.032.04-3.032.08c1-1.328 2.016-2.584 3.032-3.728Zm0 6.048c-1.968 0-3.864.072-5.68.208a.4.4 0 0 0-.296.176 79.59 79.59 0 0 0-2.976 4.784 79.395 79.395 0 0 0-2.648 5.064.4.4 0 0 0 0 .344 81.598 81.598 0 0 0 2.648 5.064 81.901 81.901 0 0 0 2.968 4.776.4.4 0 0 0 .304.176c1.816.136 3.712.208 5.68.208 1.968 0 3.864-.072 5.68-.208a.4.4 0 0 0 .304-.176 81.901 81.901 0 0 0 2.968-4.776 81.598 81.598 0 0 0 2.648-5.064.4.4 0 0 0 0-.344 79.395 79.395 0 0 0-2.648-5.064v-.008a81.901 81.901 0 0 0-2.968-4.776.4.4 0 0 0-.304-.176 76.116 76.116 0 0 0-5.68-.208Zm-8.696.504a.402.402 0 0 0-.064 0 61.54 61.54 0 0 0-5.92 1 .4.4 0 0 0-.296.512 62.193 62.193 0 0 0 2.088 5.704.4.4 0 0 0 .728.024 82.168 82.168 0 0 1 1.816-3.376h.008a76.042 76.042 0 0 1 1.968-3.248.4.4 0 0 0-.328-.616Zm17.408 0h-.032a.399.399 0 0 0-.312.616 85.367 85.367 0 0 1 1.976 3.248 87.743 87.743 0 0 1 1.816 3.376.4.4 0 0 0 .728-.024 61.344 61.344 0 0 0 2.088-5.704.398.398 0 0 0-.145-.444.4.4 0 0 0-.151-.068 61.54 61.54 0 0 0-5.92-1 .384.384 0 0 0-.048 0Zm-8.712.296c1.88 0 3.68.072 5.424.2a74.648 74.648 0 0 1 2.832 4.56 76.407 76.407 0 0 1 2.528 4.84 76.407 76.407 0 0 1-2.528 4.84 74.648 74.648 0 0 1-2.832 4.56 73.877 73.877 0 0 1-10.848 0 74.648 74.648 0 0 1-2.832-4.56 76.407 76.407 0 0 1-2.528-4.84c.76-1.584 1.592-3.2 2.528-4.84a74.648 74.648 0 0 1 2.832-4.56c1.744-.128 3.544-.2 5.424-.2Zm-9.504.64a70.928 70.928 0 0 0-1.528 2.536c-.504.872-.96 1.744-1.416 2.616a62.028 62.028 0 0 1-1.608-4.384 61.903 61.903 0 0 1 4.552-.768Zm19.008 0c1.592.216 3.12.464 4.544.776-.44 1.4-.992 2.872-1.6 4.376-.456-.872-.912-1.744-1.416-2.616a70.928 70.928 0 0 0-1.528-2.536Zm-26.448.64a.4.4 0 0 0-.096.016c-3.6.992-6.504 2.264-8.536 3.672-2.024 1.416-3.224 2.992-3.224 4.632 0 1.64 1.2 3.216 3.224 4.632 2.032 1.408 4.936 2.68 8.536 3.672a.4.4 0 0 0 .488-.264c.768-2.512 1.784-5.152 3.032-7.872a.4.4 0 0 0 0-.336c-1.248-2.72-2.264-5.36-3.032-7.872a.4.4 0 0 0-.392-.28Zm33.864 0a.4.4 0 0 0-.368.28c-.768 2.512-1.784 5.152-3.032 7.872a.4.4 0 0 0 0 .336c1.248 2.72 2.264 5.36 3.032 7.872a.4.4 0 0 0 .488.264c3.6-.992 6.504-2.264 8.536-3.672 2.024-1.416 3.224-2.992 3.224-4.632 0-1.64-1.2-3.216-3.224-4.632-2.032-1.408-4.936-2.68-8.536-3.672a.4.4 0 0 0-.12-.016Zm-34.088.904a64.786 64.786 0 0 0 2.856 7.416 64.786 64.786 0 0 0-2.856 7.416c-3.36-.96-6.096-2.152-7.952-3.44-1.912-1.336-2.88-2.736-2.88-3.976 0-1.24.968-2.64 2.88-3.976 1.856-1.288 4.592-2.48 7.952-3.44Zm34.336 0c3.36.96 6.096 2.152 7.952 3.44 1.912 1.336 2.88 2.736 2.88 3.976 0 1.24-.968 2.64-2.88 3.976-1.856 1.288-4.592 2.48-7.952 3.44a64.786 64.786 0 0 0-2.856-7.416 64.786 64.786 0 0 0 2.856-7.416Zm-17.168 1.016a6.408 6.408 0 0 0-6.4 6.4c0 3.528 2.872 6.4 6.4 6.4 3.528 0 6.4-2.872 6.4-6.4 0-3.528-2.872-6.4-6.4-6.4Zm0 1.6c2.664 0 4.8 2.136 4.8 4.8 0 2.664-2.136 4.8-4.8 4.8a4.783 4.783 0 0 1-4.8-4.8c0-2.664 2.136-4.8 4.8-4.8Zm-12.512 7.232a.4.4 0 0 0-.376.248 61.344 61.344 0 0 0-2.088 5.704.4.4 0 0 0 .296.512 61.12 61.12 0 0 0 5.92 1 .4.4 0 0 0 .384-.616 85.265 85.265 0 0 1-1.968-3.248 82.168 82.168 0 0 1-1.816-3.376.4.4 0 0 0-.352-.224Zm25.016 0a.4.4 0 0 0-.344.224 82.168 82.168 0 0 1-1.816 3.376 85.367 85.367 0 0 1-1.976 3.248.4.4 0 0 0 .392.616 61.54 61.54 0 0 0 5.92-1 .4.4 0 0 0 .296-.512 62.193 62.193 0 0 0-2.088-5.704.4.4 0 0 0-.384-.248Zm-24.952 1.376c.456.872.912 1.744 1.416 2.616a70.928 70.928 0 0 0 1.528 2.536c-1.592-.216-3.128-.464-4.544-.776.44-1.4.992-2.872 1.6-4.376Zm24.896 0c.608 1.504 1.16 2.976 1.6 4.376-1.416.312-2.952.56-4.544.776a70.928 70.928 0 0 0 1.528-2.536c.504-.872.96-1.744 1.416-2.616Zm2.808 6.616a.402.402 0 0 0-.096.008c-2.52.568-5.272.992-8.2 1.256a.399.399 0 0 0-.288.168c-1.72 2.48-3.504 4.736-5.304 6.704a.4.4 0 0 0 .016.552c3.24 3.248 6.424 5.496 9.208 6.24 1.456.392 2.728.328 3.72-.256 1.416-.824 2.176-2.656 2.384-5.12.216-2.472-.128-5.624-1.064-9.256a.4.4 0 0 0-.376-.296Zm-30.496 0a.4.4 0 0 0-.4.296c-.928 3.632-1.272 6.784-1.056 9.256.208 2.464.968 4.296 2.384 5.12 1 .584 2.264.648 3.72.256 2.784-.744 5.968-2.992 9.208-6.24a.4.4 0 0 0 .016-.552c-1.8-1.968-3.584-4.224-5.304-6.704a.4.4 0 0 0-.288-.168c-2.928-.264-5.68-.688-8.2-1.256a.405.405 0 0 0-.08-.008Zm30.168.848c.84 3.408 1.168 6.384.976 8.632-.2 2.344-.928 3.88-1.992 4.504-.768.44-1.792.528-3.112.176-2.472-.664-5.496-2.768-8.584-5.808a65.716 65.716 0 0 0 5-6.32 64.807 64.807 0 0 0 7.712-1.184Zm-29.856 0c2.392.528 4.968.928 7.712 1.184a65.716 65.716 0 0 0 5 6.32c-3.088 3.048-6.112 5.144-8.584 5.808-1.32.352-2.344.264-3.112-.176C25.728 64.28 25 62.744 24.8 60.4c-.192-2.248.136-5.224.976-8.632Zm11.016.632a.4.4 0 0 0-.304.632 62.208 62.208 0 0 0 3.92 4.816.4.4 0 0 0 .592 0 62.208 62.208 0 0 0 3.92-4.816.4.4 0 0 0-.344-.632c-1.272.064-2.56.096-3.872.096a76.973 76.973 0 0 1-3.912-.096Zm.88.816c1 .04 2 .08 3.032.08s2.032-.04 3.032-.08a59.892 59.892 0 0 1-3.032 3.728 59.892 59.892 0 0 1-3.032-3.728Z"
    />
    <path
      fill={props.footer ? "black" : "red"}
      fillOpacity={0.76}
      d="M28.464 12.496c-.24 0-.48.008-.712.032a6.111 6.111 0 0 0-2.576.8c-1.984 1.16-3.112 3.424-3.48 6.368-.36 2.848 0 6.384.968 10.304-3.88 1.104-7.12 2.544-9.408 4.272-2.36 1.792-3.752 3.912-3.752 6.224 0 2.312 1.392 4.432 3.752 6.224 2.288 1.728 5.528 3.176 9.408 4.28-.968 3.92-1.328 7.448-.968 10.296.368 2.944 1.496 5.208 3.48 6.368.952.552 2.032.832 3.208.832.744 0 1.528-.112 2.352-.328 3.08-.824 6.512-3.2 9.968-6.584 3.456 3.384 6.888 5.76 9.968 6.584a9.293 9.293 0 0 0 2.352.328c1.168 0 2.256-.28 3.208-.832 1.984-1.16 3.112-3.424 3.48-6.368.36-2.848 0-6.376-.968-10.296 3.88-1.104 7.12-2.552 9.408-4.28 2.36-1.792 3.752-3.912 3.752-6.224 0-2.312-1.392-4.432-3.752-6.224-2.288-1.728-5.528-3.168-9.408-4.272.968-3.92 1.328-7.456.968-10.304-.368-2.944-1.496-5.208-3.48-6.368-1.56-.912-3.456-1.064-5.56-.504-3.08.824-6.512 3.2-9.968 6.584-3.456-3.384-6.888-5.76-9.968-6.584a9.385 9.385 0 0 0-2.272-.328Zm0 .8c.64.008 1.328.104 2.064.304 2.936.784 6.4 3.128 9.896 6.616a.4.4 0 0 0 .56 0c3.496-3.488 6.96-5.832 9.896-6.616 1.952-.528 3.592-.368 4.944.416 1.712 1 2.744 2.984 3.096 5.784.352 2.792.008 6.352-1.016 10.36a.4.4 0 0 0 .28.48c3.984 1.104 7.248 2.576 9.488 4.272 2.232 1.704 3.432 3.592 3.432 5.584 0 1.992-1.2 3.88-3.432 5.584-2.24 1.696-5.504 3.168-9.488 4.272a.4.4 0 0 0-.28.48c1.024 4.008 1.368 7.576 1.016 10.368-.352 2.792-1.384 4.776-3.096 5.776-.824.48-1.752.72-2.8.72a8.142 8.142 0 0 1-2.144-.304v.008c-2.936-.792-6.4-3.136-9.896-6.624a.4.4 0 0 0-.56 0c-3.496 3.488-6.96 5.832-9.896 6.624v-.008c-.76.208-1.48.304-2.144.304-1.048 0-1.976-.24-2.8-.72-1.712-1-2.744-2.984-3.096-5.776-.352-2.792-.008-6.36 1.016-10.368a.4.4 0 0 0-.28-.48c-3.984-1.104-7.248-2.576-9.488-4.272-2.232-1.704-3.432-3.592-3.432-5.584 0-1.992 1.2-3.88 3.432-5.584 2.24-1.696 5.504-3.168 9.488-4.272a.4.4 0 0 0 .28-.48c-1.024-4.008-1.368-7.568-1.016-10.36.352-2.8 1.384-4.784 3.096-5.784a5.329 5.329 0 0 1 2.248-.696c.2-.024.416-.032.632-.024Zm-.064 1.6c-.752 0-1.432.168-2.008.504-1.416.824-2.176 2.656-2.384 5.12-.216 2.472.128 5.624 1.056 9.256a.4.4 0 0 0 .48.288c2.52-.568 5.272-.992 8.2-1.256a.399.399 0 0 0 .288-.168c1.72-2.48 3.504-4.736 5.304-6.704a.4.4 0 0 0-.016-.552c-3.24-3.248-6.424-5.496-9.208-6.24-.608-.16-1.176-.248-1.712-.248Zm24.608 0c-.536 0-1.104.088-1.712.248-2.784.744-5.968 2.992-9.208 6.24a.4.4 0 0 0-.016.552c1.8 1.968 3.584 4.224 5.304 6.704a.4.4 0 0 0 .288.168c2.928.264 5.68.688 8.2 1.256a.4.4 0 0 0 .48-.288c.928-3.632 1.272-6.784 1.056-9.256-.208-2.464-.968-4.296-2.384-5.12-.576-.336-1.256-.504-2.008-.504Zm-24.608.8c.448 0 .952.072 1.504.216 2.472.664 5.496 2.768 8.584 5.808a65.716 65.716 0 0 0-5 6.32c-2.744.256-5.32.656-7.712 1.184-.84-3.408-1.168-6.384-.976-8.632.2-2.344.928-3.88 1.992-4.504.448-.256.976-.392 1.608-.392Zm24.608 0c.632 0 1.16.136 1.608.392 1.064.624 1.792 2.168 1.992 4.504.192 2.248-.136 5.224-.976 8.632a64.554 64.554 0 0 0-7.712-1.184 65.716 65.716 0 0 0-5-6.32c3.088-3.04 6.112-5.144 8.584-5.808a6.026 6.026 0 0 1 1.504-.216ZM40.68 23.008a.4.4 0 0 0-.272.136 62.208 62.208 0 0 0-3.92 4.816.4.4 0 0 0 .344.632 76.973 76.973 0 0 1 3.872-.096c1.312 0 2.608.04 3.872.096a.4.4 0 0 0 .344-.632A62.208 62.208 0 0 0 41 23.144a.4.4 0 0 0-.32-.136Zm.024 1.04a59.892 59.892 0 0 1 3.032 3.728c-1-.04-2-.08-3.032-.08s-2.032.04-3.032.08c1-1.328 2.016-2.584 3.032-3.728Zm0 6.048c-1.968 0-3.864.072-5.68.208a.4.4 0 0 0-.296.176 79.59 79.59 0 0 0-2.976 4.784 79.395 79.395 0 0 0-2.648 5.064.4.4 0 0 0 0 .344 81.598 81.598 0 0 0 2.648 5.064 81.901 81.901 0 0 0 2.968 4.776.4.4 0 0 0 .304.176c1.816.136 3.712.208 5.68.208 1.968 0 3.864-.072 5.68-.208a.4.4 0 0 0 .304-.176 81.901 81.901 0 0 0 2.968-4.776 81.598 81.598 0 0 0 2.648-5.064.4.4 0 0 0 0-.344 79.395 79.395 0 0 0-2.648-5.064v-.008a81.901 81.901 0 0 0-2.968-4.776.4.4 0 0 0-.304-.176 76.116 76.116 0 0 0-5.68-.208Zm-8.696.504a.402.402 0 0 0-.064 0 61.54 61.54 0 0 0-5.92 1 .4.4 0 0 0-.296.512 62.193 62.193 0 0 0 2.088 5.704.4.4 0 0 0 .728.024 82.168 82.168 0 0 1 1.816-3.376h.008a76.042 76.042 0 0 1 1.968-3.248.4.4 0 0 0-.328-.616Zm17.408 0h-.032a.399.399 0 0 0-.312.616 85.367 85.367 0 0 1 1.976 3.248 87.743 87.743 0 0 1 1.816 3.376.4.4 0 0 0 .728-.024 61.344 61.344 0 0 0 2.088-5.704.398.398 0 0 0-.145-.444.4.4 0 0 0-.151-.068 61.54 61.54 0 0 0-5.92-1 .384.384 0 0 0-.048 0Zm-8.712.296c1.88 0 3.68.072 5.424.2a74.648 74.648 0 0 1 2.832 4.56 76.407 76.407 0 0 1 2.528 4.84 76.407 76.407 0 0 1-2.528 4.84 74.648 74.648 0 0 1-2.832 4.56 73.877 73.877 0 0 1-10.848 0 74.648 74.648 0 0 1-2.832-4.56 76.407 76.407 0 0 1-2.528-4.84c.76-1.584 1.592-3.2 2.528-4.84a74.648 74.648 0 0 1 2.832-4.56c1.744-.128 3.544-.2 5.424-.2Zm-9.504.64a70.928 70.928 0 0 0-1.528 2.536c-.504.872-.96 1.744-1.416 2.616a62.028 62.028 0 0 1-1.608-4.384 61.903 61.903 0 0 1 4.552-.768Zm19.008 0c1.592.216 3.12.464 4.544.776-.44 1.4-.992 2.872-1.6 4.376-.456-.872-.912-1.744-1.416-2.616a70.928 70.928 0 0 0-1.528-2.536Zm-26.448.64a.4.4 0 0 0-.096.016c-3.6.992-6.504 2.264-8.536 3.672-2.024 1.416-3.224 2.992-3.224 4.632 0 1.64 1.2 3.216 3.224 4.632 2.032 1.408 4.936 2.68 8.536 3.672a.4.4 0 0 0 .488-.264c.768-2.512 1.784-5.152 3.032-7.872a.4.4 0 0 0 0-.336c-1.248-2.72-2.264-5.36-3.032-7.872a.4.4 0 0 0-.392-.28Zm33.864 0a.4.4 0 0 0-.368.28c-.768 2.512-1.784 5.152-3.032 7.872a.4.4 0 0 0 0 .336c1.248 2.72 2.264 5.36 3.032 7.872a.4.4 0 0 0 .488.264c3.6-.992 6.504-2.264 8.536-3.672 2.024-1.416 3.224-2.992 3.224-4.632 0-1.64-1.2-3.216-3.224-4.632-2.032-1.408-4.936-2.68-8.536-3.672a.4.4 0 0 0-.12-.016Zm-34.088.904a64.786 64.786 0 0 0 2.856 7.416 64.786 64.786 0 0 0-2.856 7.416c-3.36-.96-6.096-2.152-7.952-3.44-1.912-1.336-2.88-2.736-2.88-3.976 0-1.24.968-2.64 2.88-3.976 1.856-1.288 4.592-2.48 7.952-3.44Zm34.336 0c3.36.96 6.096 2.152 7.952 3.44 1.912 1.336 2.88 2.736 2.88 3.976 0 1.24-.968 2.64-2.88 3.976-1.856 1.288-4.592 2.48-7.952 3.44a64.786 64.786 0 0 0-2.856-7.416 64.786 64.786 0 0 0 2.856-7.416Zm-17.168 1.016a6.408 6.408 0 0 0-6.4 6.4c0 3.528 2.872 6.4 6.4 6.4 3.528 0 6.4-2.872 6.4-6.4 0-3.528-2.872-6.4-6.4-6.4Zm0 1.6c2.664 0 4.8 2.136 4.8 4.8 0 2.664-2.136 4.8-4.8 4.8a4.783 4.783 0 0 1-4.8-4.8c0-2.664 2.136-4.8 4.8-4.8Zm-12.512 7.232a.4.4 0 0 0-.376.248 61.344 61.344 0 0 0-2.088 5.704.4.4 0 0 0 .296.512 61.12 61.12 0 0 0 5.92 1 .4.4 0 0 0 .384-.616 85.265 85.265 0 0 1-1.968-3.248 82.168 82.168 0 0 1-1.816-3.376.4.4 0 0 0-.352-.224Zm25.016 0a.4.4 0 0 0-.344.224 82.168 82.168 0 0 1-1.816 3.376 85.367 85.367 0 0 1-1.976 3.248.4.4 0 0 0 .392.616 61.54 61.54 0 0 0 5.92-1 .4.4 0 0 0 .296-.512 62.193 62.193 0 0 0-2.088-5.704.4.4 0 0 0-.384-.248Zm-24.952 1.376c.456.872.912 1.744 1.416 2.616a70.928 70.928 0 0 0 1.528 2.536c-1.592-.216-3.128-.464-4.544-.776.44-1.4.992-2.872 1.6-4.376Zm24.896 0c.608 1.504 1.16 2.976 1.6 4.376-1.416.312-2.952.56-4.544.776a70.928 70.928 0 0 0 1.528-2.536c.504-.872.96-1.744 1.416-2.616Zm2.808 6.616a.402.402 0 0 0-.096.008c-2.52.568-5.272.992-8.2 1.256a.399.399 0 0 0-.288.168c-1.72 2.48-3.504 4.736-5.304 6.704a.4.4 0 0 0 .016.552c3.24 3.248 6.424 5.496 9.208 6.24 1.456.392 2.728.328 3.72-.256 1.416-.824 2.176-2.656 2.384-5.12.216-2.472-.128-5.624-1.064-9.256a.4.4 0 0 0-.376-.296Zm-30.496 0a.4.4 0 0 0-.4.296c-.928 3.632-1.272 6.784-1.056 9.256.208 2.464.968 4.296 2.384 5.12 1 .584 2.264.648 3.72.256 2.784-.744 5.968-2.992 9.208-6.24a.4.4 0 0 0 .016-.552c-1.8-1.968-3.584-4.224-5.304-6.704a.4.4 0 0 0-.288-.168c-2.928-.264-5.68-.688-8.2-1.256a.405.405 0 0 0-.08-.008Zm30.168.848c.84 3.408 1.168 6.384.976 8.632-.2 2.344-.928 3.88-1.992 4.504-.768.44-1.792.528-3.112.176-2.472-.664-5.496-2.768-8.584-5.808a65.716 65.716 0 0 0 5-6.32 64.807 64.807 0 0 0 7.712-1.184Zm-29.856 0c2.392.528 4.968.928 7.712 1.184a65.716 65.716 0 0 0 5 6.32c-3.088 3.048-6.112 5.144-8.584 5.808-1.32.352-2.344.264-3.112-.176C25.728 64.28 25 62.744 24.8 60.4c-.192-2.248.136-5.224.976-8.632Zm11.016.632a.4.4 0 0 0-.304.632 62.208 62.208 0 0 0 3.92 4.816.4.4 0 0 0 .592 0 62.208 62.208 0 0 0 3.92-4.816.4.4 0 0 0-.344-.632c-1.272.064-2.56.096-3.872.096a76.973 76.973 0 0 1-3.912-.096Zm.88.816c1 .04 2 .08 3.032.08s2.032-.04 3.032-.08a59.892 59.892 0 0 1-3.032 3.728 59.892 59.892 0 0 1-3.032-3.728Z"
    />
    <path
      fill="transparent"
      d="M38.175 42.815c1.717 1.18 3.432 1.18 5.145 0h-5.145Zm.56-3.49c0-.275.22-.495.495-.495s.495.22.495.495-.22.495-.495.495a.493.493 0 0 1-.495-.495Zm3.045 0c0-.275.22-.495.495-.495s.495.22.495.495-.22.495-.495.495a.493.493 0 0 1-.495-.495Zm-5.775 1.42a4.748 4.748 0 0 1 4.75-4.75 4.748 4.748 0 0 1 4.75 4.75 4.748 4.748 0 0 1-4.75 4.75 4.748 4.748 0 0 1-4.75-4.75Zm0 0a4.748 4.748 0 0 1 4.75-4.75 4.748 4.748 0 0 1 4.75 4.75 4.748 4.748 0 0 1-4.75 4.75 4.748 4.748 0 0 1-4.75-4.75Z"
    />
    <path
      stroke={props.footer ? "black" : "red"}
      strokeOpacity={0.76}
      d="M38.175 42.815c1.717 1.18 3.432 1.18 5.145 0m-4.585-3.49c0-.275.22-.495.495-.495s.495.22.495.495-.22.495-.495.495a.493.493 0 0 1-.495-.495Zm3.045 0c0-.275.22-.495.495-.495s.495.22.495.495-.22.495-.495.495a.493.493 0 0 1-.495-.495Zm-5.775 1.42a4.748 4.748 0 0 1 4.75-4.75 4.748 4.748 0 0 1 4.75 4.75 4.748 4.748 0 0 1-4.75 4.75 4.748 4.748 0 0 1-4.75-4.75Z"
    />
  </svg>
  )

  
  return <div style={{display: "inline-flex"}}>
    {props.type === "desktop" && DESKTOP}
    {props.type === "mobile" && MOBILE}
    {props.withTitle && <div style={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", gap: 3, justifyContent: "center"}}>
        <Title fontSize={34}>REACT</Title>
        <Title fontSize={34}>PROFILE</Title>
    </div>}
  </div>
}