import { ClientModel } from '../../models/modules/clientModel';
import { ClientMast, FetchClientsByPhaseInput, Scalars } from '../../type';

export interface IClientMastRepository {
        addClient(input: ClientMast): Promise<ClientMast>;
        updateClient(input: ClientMast): Promise<ClientMast>;
        deleteClient(clientID: Scalars['ID']): Promise<ClientMast>;
        fetchClientByClientID(clientID: Scalars['ID']): Promise<ClientMast | null>;
        fetchClientsByChargeUserID(chargeUserID: Scalars['ID']): Promise<ClientMast[]>;
        fetchAllClient(): Promise<ClientMast[]>;
        fetchClientsByPhaseNumberStatus(phaseNumber: number): Promise<ClientMast[]>;
        fetchClientsByPhaseDetailStatus(phaseDetail: string): Promise<ClientMast[] | null>;
}
