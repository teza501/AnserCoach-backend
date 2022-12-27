import styles from "../../styles/home/Demo.module.css";
import { useState } from "react";

const Demo = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [sClass, setSClass] = useState("");

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h2>
                            Book your <span>Free Demo</span> Session
                        </h2>
                        <p>
                            Get a free academic counselling session with our
                            experts
                        </p>

                        <form>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                placeholder="Enter your contact number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <select
                                value={sClass}
                                onChange={(e) => setSClass(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select your Class
                                </option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                            </select>

                            <button type="submit">Book a free demo</button>
                        </form>
                    </div>

                    <div className={styles.right}>
                        <img src="/animations/planet.gif" alt="Graphic" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Demo;
