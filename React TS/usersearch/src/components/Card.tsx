import { UserType } from "../types";
import LocationPinIcon from "../assets/icon-location.svg";
import LinkIcon from "../assets/icon-website.svg";
import CompanyIcon from "../assets/icon-company.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { formatDate } from "../util/formatDate";

type Props = {
  userData: UserType;
};

const Card = ({ userData }: Props) => {
  return (
    <div className="mt-6 py-12 bg-light-background rounded-lg shadow-xl dark:bg-dark-background">
      <div className="md:flex w-full">
        <div className="pl-6 md:pl-12 flex w-full">
          <img
            src={userData.avatar_url}
            alt=""
            className="rounded-full w-16 h-16 md:w-[117px] md:h-[117px] sm:w-[117px] sm:h-[117px]"
          />
          <div className="px-[41px] w-full">
            <div className="flex flex-col justify-between md:items-baseline w-full md:flex-row">
              <div>
                <h1 className="">{userData.name}</h1>
                <h3 className="text-primary dark:text-primary text-[13px]">
                  @{userData.login}
                </h3>
              </div>
              <div className="dark:text-white">
                Joined {formatDate({ date: new Date(userData.created_at) })}
              </div>
            </div>

            <p className="hidden pt-6 md:flex">
              {userData.bio ? userData.bio : "This profile has no bio"}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12">
        <p className="pt-6 md:hidden">
          {userData.bio ? userData.bio : "This profile has no bio"}
        </p>
        <div className="flex px-3 my-8 py-3 bg-light-card justify-around rounded-lg md:px-8 md:py-8 md:my-8 dark:bg-dark-card">
          <div>
            <h4>Repos</h4>
            <span className="font-bold dark:text-white flex justify-self-center">
              {userData.public_repos}
            </span>
          </div>
          <div>
            <h4>Followers</h4>
            <span className="font-bold dark:text-white flex justify-self-center">
              {userData.followers}
            </span>
          </div>
          <div>
            <h4>Following</h4>
            <span className="font-bold dark:text-white flex justify-self-center">
              {userData.following}
            </span>
          </div>
        </div>

        <ul className="xs:flex xs:flex-col md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-x-5">
          <li className="flex items-center gap-5 pb-4">
            <img
              src={LocationPinIcon}
              className={`${
                userData.location ? "" : "grayscale opacity-50"
              } dark:brightness-0 dark:invert`}
            />
            <span
              className={
                userData.location ? "dark:text-white" : "text-gray-400"
              }
            >
              {userData.location || "Not available"}
            </span>
          </li>
          <li className="flex items-center gap-5 pb-4">
            <img
              src={TwitterIcon}
              className={`${
                userData.twitter_username ? "" : "grayscale opacity-50"
              } dark:brightness-0 dark:invert`}
            />
            {userData.twitter_username ? (
              <a
                href={`https://twitter.com/${userData.twitter_username}`}
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                @{userData.twitter_username}
              </a>
            ) : (
              <span className="text-gray-400">Not available</span>
            )}
          </li>
          <li className="flex items-center gap-5 pb-4 hover:underline cursor-pointer">
            <img
              src={LinkIcon}
              className={`${
                userData.html_url ? "" : "grayscale opacity-50"
              } dark:brightness-0 dark:invert`}
            />
            <span
              className={
                userData.html_url
                  ? "overflow-x-hidden dark:text-white"
                  : "text-gray-400"
              }
            >
              {userData.html_url ? (
                <a href={userData.html_url}>{userData.html_url}</a>
              ) : (
                "Not available"
              )}
            </span>
          </li>
          <li className="flex items-center gap-5 pb-4">
            <img
              src={CompanyIcon}
              className={`${
                userData.company ? "" : "grayscale opacity-50"
              } dark:brightness-0 dark:invert`}
            />
            <span
              className={`${
                userData.company ? "dark:text-white" : "text-gray-400"
              } xs:text-sm`}
            >
              {userData.company || "Not available"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
