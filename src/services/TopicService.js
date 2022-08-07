import TABService from './TABService';

class TopicService extends TABService {

    model = 'topic';

    getMyTopics = () => 
        this._get(
            `${this.model}/my`
        )

}

export default new TopicService();