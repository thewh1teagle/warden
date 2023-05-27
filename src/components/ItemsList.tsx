import { VaultItem } from "../utils/bitwarden"


export default function ItemsList({ items, setItem }: { items: VaultItem[], setItem: React.Dispatch<VaultItem> }) {
    return (
        <div className="items flex flex-col gap-2 mb-10">
            {items.map(item => (
                <div className='cursor-pointer flex border-blue-500 rounded-lg p-2 border-2 font-semibold text-lg relative items-center dark:bg-gray-700 dark:text-white bg-slate-50'
                    onClick={() => {
                        setItem(item)
                    }}>
                    {item.card ? (
                        <svg className="dark:fill-slate-50 fill-black w-5 h-5 absolute right-4 text-white" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.43 0.0625H16.57C18.8675 0.0625 20.6875 0.0625001 22.1112 0.25375C23.5762 0.45125 24.7625 0.86625 25.6987 1.80125C26.6337 2.7375 27.0487 3.92375 27.2462 5.38875C27.3587 6.23 27.405 7.20875 27.4237 8.3425C27.4401 8.43752 27.4418 8.53447 27.4287 8.63C27.4375 9.3375 27.4375 10.1025 27.4375 10.93V11.07C27.4375 13.3675 27.4375 15.1875 27.2462 16.6112C27.0487 18.0763 26.6337 19.2625 25.6987 20.1987C24.7625 21.1337 23.5762 21.5487 22.1112 21.7463C20.6862 21.9375 18.8675 21.9375 16.57 21.9375H11.43C9.1325 21.9375 7.3125 21.9375 5.88875 21.7463C4.42375 21.5487 3.2375 21.1337 2.30125 20.1987C1.36625 19.2625 0.951247 18.0763 0.753747 16.6112C0.562497 15.1863 0.562497 13.3675 0.562497 11.07V10.93C0.562497 10.1025 0.562497 9.3375 0.571247 8.63C0.557844 8.53454 0.559109 8.43758 0.574997 8.3425C0.594997 7.20875 0.641247 6.23 0.753747 5.38875C0.951247 3.92375 1.36625 2.7375 2.30125 1.80125C3.2375 0.86625 4.42375 0.45125 5.88875 0.25375C7.31375 0.0625001 9.1325 0.0625 11.43 0.0625ZM2.44 9.4375C2.4375 9.9225 2.4375 10.4425 2.4375 11C2.4375 13.3837 2.44 15.0763 2.6125 16.3625C2.78125 17.6188 3.09875 18.3438 3.6275 18.8725C4.15625 19.4013 4.88125 19.7188 6.13875 19.8875C7.42375 20.06 9.11625 20.0625 11.5 20.0625H16.5C18.8837 20.0625 20.5775 20.06 21.8625 19.8875C23.1187 19.7188 23.8437 19.4013 24.3725 18.8725C24.9012 18.3438 25.2187 17.6187 25.3875 16.3612C25.56 15.0762 25.5625 13.3837 25.5625 11C25.5625 10.4425 25.5625 9.9225 25.56 9.4375H2.44ZM25.53 7.5625H2.47C2.495 6.82875 2.5375 6.195 2.6125 5.6375C2.78125 4.38125 3.09875 3.65625 3.6275 3.1275C4.15625 2.59875 4.88125 2.28125 6.13875 2.1125C7.42375 1.94 9.11625 1.9375 11.5 1.9375H16.5C18.8837 1.9375 20.5775 1.94 21.8625 2.1125C23.1187 2.28125 23.8437 2.59875 24.3725 3.1275C24.9012 3.65625 25.2187 4.38125 25.3875 5.63875C25.4625 6.195 25.505 6.82875 25.53 7.5625ZM5.5625 16C5.5625 15.7514 5.66127 15.5129 5.83708 15.3371C6.0129 15.1613 6.25136 15.0625 6.5 15.0625H11.5C11.7486 15.0625 11.9871 15.1613 12.1629 15.3371C12.3387 15.5129 12.4375 15.7514 12.4375 16C12.4375 16.2486 12.3387 16.4871 12.1629 16.6629C11.9871 16.8387 11.7486 16.9375 11.5 16.9375H6.5C6.25136 16.9375 6.0129 16.8387 5.83708 16.6629C5.66127 16.4871 5.5625 16.2486 5.5625 16ZM13.6875 16C13.6875 15.7514 13.7863 15.5129 13.9621 15.3371C14.1379 15.1613 14.3764 15.0625 14.625 15.0625H16.5C16.7486 15.0625 16.9871 15.1613 17.1629 15.3371C17.3387 15.5129 17.4375 15.7514 17.4375 16C17.4375 16.2486 17.3387 16.4871 17.1629 16.6629C16.9871 16.8387 16.7486 16.9375 16.5 16.9375H14.625C14.3764 16.9375 14.1379 16.8387 13.9621 16.6629C13.7863 16.4871 13.6875 16.2486 13.6875 16Z" />
                        </svg>
                    ) :
                        item.login ? (
                            <svg className="dark:fill-slate-50 fill-black w-5 h-5 absolute right-4 dark:text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8792 18.9875C10.6653 18.7347 10.5583 18.4481 10.5583 18.1277C10.5583 17.8072 10.6653 17.5397 10.8792 17.325L13.0375 15.1667H4.66667C4.33612 15.1667 4.05884 15.0547 3.83484 14.8307C3.61084 14.6067 3.49923 14.3298 3.5 14C3.5 13.6694 3.612 13.3922 3.836 13.1682C4.06 12.9442 4.33689 12.8326 4.66667 12.8333H13.0375L10.8792 10.675C10.6458 10.4417 10.5292 10.1644 10.5292 9.84317C10.5292 9.52195 10.6458 9.24506 10.8792 9.0125C11.0931 8.77917 11.3606 8.6625 11.6818 8.6625C12.0031 8.6625 12.2702 8.76945 12.4833 8.98334L16.6833 13.1833C16.8 13.3 16.8828 13.4264 16.9318 13.5625C16.9808 13.6986 17.0049 13.8444 17.0042 14C17.0042 14.1556 16.9801 14.3014 16.9318 14.4375C16.8836 14.5736 16.8008 14.7 16.6833 14.8167L12.4833 19.0167C12.25 19.25 11.9778 19.357 11.6667 19.3375C11.3556 19.3181 11.0931 19.2014 10.8792 18.9875ZM15.1667 24.5C14.8361 24.5 14.5592 24.3884 14.336 24.1652C14.1128 23.942 14.0008 23.6647 14 23.3333C14 23.0028 14.112 22.7255 14.336 22.5015C14.56 22.2775 14.8369 22.1659 15.1667 22.1667H22.1667V5.83334H15.1667C14.8361 5.83334 14.5588 5.72134 14.3348 5.49734C14.1108 5.27334 13.9992 4.99645 14 4.66667C14 4.33612 14.112 4.05884 14.336 3.83484C14.56 3.61084 14.8369 3.49923 15.1667 3.5H22.1667C22.8083 3.5 23.3578 3.72867 23.8152 4.186C24.2725 4.64334 24.5008 5.19245 24.5 5.83334V22.1667C24.5 22.8083 24.2713 23.3578 23.814 23.8152C23.3567 24.2725 22.8076 24.5008 22.1667 24.5H15.1667Z" />
                            </svg>
                        ) : item.notes ? (
                            <svg className="dark:fill-slate-50 fill-black w-4 h-4 absolute right-4 text-white" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2857 7.32356e-09C18.4882 -6.6977e-05 19.6452 0.459368 20.5201 1.2843C21.395 2.10924 21.9216 3.23731 21.9921 4.43771L22 4.71429V11.5956C21.9998 12.3334 21.74 13.0477 21.2661 13.6133L21.0791 13.8176L13.8176 21.0791C13.2958 21.6009 12.6071 21.9224 11.8721 21.9874L11.5956 22H4.71429C3.51181 22.0001 2.35476 21.5406 1.47988 20.7157C0.604989 19.8908 0.0784025 18.7627 0.00785733 17.5623L7.32356e-09 17.2857V4.71429C-6.6977e-05 3.51181 0.459368 2.35476 1.2843 1.47988C2.10924 0.604989 3.23731 0.0784025 4.43771 0.00785733L4.71429 7.32356e-09H17.2857ZM17.2857 1.57143H4.71429C3.92138 1.57118 3.15768 1.87064 2.57628 2.40978C1.99488 2.94892 1.63875 3.6879 1.57929 4.47857L1.57143 4.71429V17.2857C1.57118 18.0786 1.87064 18.8423 2.40978 19.4237C2.94892 20.0051 3.6879 20.3612 4.47857 20.4207L4.71429 20.4286H11V15.7143C10.9999 14.5118 11.4594 13.3548 12.2843 12.4799C13.1092 11.605 14.2373 11.0784 15.4377 11.0079L15.7143 11H20.4286V4.71429C20.4288 3.92138 20.1294 3.15768 19.5902 2.57628C19.0511 1.99488 18.3121 1.63875 17.5214 1.57929L17.2857 1.57143ZM20.0876 12.573L15.7143 12.5714C14.9214 12.5712 14.1577 12.8706 13.5763 13.4098C12.9949 13.9489 12.6388 14.6879 12.5793 15.4786L12.5714 15.7143V20.0844L12.7066 19.9681L19.9681 12.7066C20.0103 12.6647 20.0497 12.6201 20.086 12.573H20.0876Z" />
                            </svg>

                        ) : null
                    }
                    <span className="w-10/12 overflow-hidden">{item.name}</span>
                </div>
            ))}
        </div>
    )
}