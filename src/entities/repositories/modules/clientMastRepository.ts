import { ClientModel } from '../../models/modules/clientModel';
import { ClientMast, Scalars } from '../../type';

export interface IClientMastRepository {
    addClient(input: ClientMast): Promise<ClientMast>;
    updateClient(input: ClientMast): Promise<ClientMast>;
    fetchClientByClientID(clientID: Scalars['ID']): Promise<ClientMast | null>;
    fetchClientsByChargeUserID(chargeUserID: Scalars['ID']): Promise<ClientMast[]>;
    fetchAllClient(): Promise<ClientMast[]>;
    // fetchClientsByPhaseStatus(phaseStatus: string): Promise<ClientMast[]>;
    // fetchClientsByPhaseNumber(phaseNumber: number): Promise<ClientMast[]>;
    // fetchClientsByPhaseDetail(phaseDetail: string): Promise<ClientMast[]>;
    fetchClientsByContentSearch(searchContent: string | number): Promise<ClientMast[]>;
}
