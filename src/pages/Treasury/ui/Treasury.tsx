import { memo, useEffect } from 'react';
import { SendTransactionRequest, useTonConnectModal, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';
import TonWeb from 'tonweb';

import PageLayout from '../../PageLayout/PageLayout.tsx';

import cls from './Treasury.module.scss';
// address '0:6a42b4846849d3c0c9f6b948845be92baf77a0facfdd57174c5fc40db825db49'
const transaction: SendTransactionRequest = {
  validUntil: 9999999999999,
  messages: [
    {
      address: '0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F', // destination address
      amount: '20000000', //Toncoin in nanotons
    },
  ],
};

interface TreasuryProps {
  onClick: () => void;
}

export const Treasury = memo(function Treasury({ onClick }: TreasuryProps) {
  const navigate = useNavigate();
  const tonweb = new TonWeb();
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const { state } = useTonConnectModal();

  const getBalance = async () => {
    const balance = await tonweb.getBalance('0:6a42b4846849d3c0c9f6b948845be92baf77a0facfdd57174c5fc40db825db49');
    console.log('TonConnect balance 111', TonWeb.utils.fromNano(balance));
  };

  useEffect(
    () =>
      tonConnectUI.onStatusChange((wallet) => {
        console.log('TonConnect wallet useEfect', wallet);
        // if (wallet?.connectItems?.tonProof && 'proof' in wallet.connectItems.tonProof) {
        //   checkProofInYourBackend(wallet.connectItems.tonProof.proof, wallet.account);
        // }
      }),
    [tonConnectUI],
  );

  useEffect(() => {
    //if (wallet?.account.address) {
    void getBalance();
    //  }
  }, [wallet?.account.address]);

  console.log('TonConnect wallet', wallet);
  console.log('TonConnect tonConnectUI', tonConnectUI);
  console.log('TonConnect tonConnectUI 2222', tonConnectUI.connected, tonConnectUI.connected.valueOf());
  console.log('TonConnect tonConnectUI MODAL', tonConnectUI.modal.state, state);

  const connectWallet = async () => {
    try {
      const response = await tonConnectUI.openModal();
      console.log('TonConnect response', response);
      //onClick();
    } catch (error) {
      console.log('TonConnect error', error);
      onClick();
    }
  };

  const changeRouteHandler = () => {
    navigate('/about');
  };

  useEffect(
    () => () => {
      void tonConnectUI.disconnect();
    },
    [tonConnectUI],
  );

  const disconnectWallet = async () => {
    const response = await tonConnectUI.disconnect();

    console.log('TonConnect disconnectWallet', response);
  }

  return (
    <PageLayout>
      <>
        <div className={cls.tonWrapper}>
          {tonConnectUI.connected ? (
            <button onClick={disconnectWallet}>{'Disconnect'}</button>
          ) : (
            <button onClick={connectWallet}>{'Connect Wallet'}</button>
          )}
          <button onClick={changeRouteHandler}>{'About'}</button>
          <button onClick={() => tonConnectUI.sendTransaction(transaction)}>Send transaction</button>
        </div>
        <div className={cls.wrapper}>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
        </div>

        <div className={cls.wrapper}>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
        </div>
        <div className={cls.wrapper}>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
        </div>
        <div className={cls.wrapper}>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
        </div>
        <div className={cls.wrapper}>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
          <p>{'Просто текст'}</p>
        </div>
      </>
    </PageLayout>
  );
});
