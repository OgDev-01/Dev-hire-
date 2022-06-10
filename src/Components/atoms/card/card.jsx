import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../../../base/Context/AppContext";
import * as styles from "./styles.module.scss";
const Card = ({
  display_name,
  url_name,
  service_photo,
  avatar,
  starting_from,
  cust_id,
}) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHero}>
          <Image
            src={service_photo ? service_photo : undefined}
            className={styles.img}
            layout="fill"
            alt="service hero"
          />
          <div
            style={{
              backgroundColor: state.favorites.some(
                (item) => item.cust_id === cust_id
              )
                ? "#fff"
                : "#BBBBBB",
            }}
            className={styles.favIcon}
            onClick={() => {
              dispatch({ type: "updateFavorites", value: cust_id });
            }}
          >
            {Array.isArray(state.favorites) &&
            state.favorites.length > 0 &&
            state.favorites.some((item) => item.cust_id === cust_id) ? (
              <img src="/fav-icon.png" alt="favorite icon" />
            ) : (
              <img src="/love_white.png" alt="favorite icon" />
            )}
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardInfo}>
            <img src={avatar ? avatar : undefined} alt="sellers avatar" />
            <div className={styles.cardDetails}>
              <div>
                <h2>{display_name}</h2>
                <p>
                  <span>
                    {state.currencies
                      .filter((currency) => {
                        return currency.id === state.currencyId;
                      })
                      .map((sign) => sign.symbol)}
                  </span>
                  {new Intl.NumberFormat().format(
                    (state.netRate / state.divider) * Number(starting_from)
                  )}
                </p>
              </div>
              <div>
                <a href={url_name}>Hire</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
