import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Name, Button, ModalHeaderWrapper, ModalDescription, ModalCharacterWrapper }
    from './DetailsInfoStyledComponent';

import { Modal } from 'react-bootstrap';

const stripId = (url) => {
    const regex = /(\d{3,})/g;
    const id = url.match(regex);
    return id[0];
}

const ComicInfoModal = ({ comicInfo, handleReadMore, show }) => {
    return (
        <div>
            <Modal 
                show={show} 
                onHide={handleReadMore}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            
            >

                <Modal.Header closeButton>
                    <ModalHeaderWrapper>
                        {
                            comicInfo.thumbnail &&
                            <Image
                                src={`${comicInfo.thumbnail.path}/portrait_uncanny.${comicInfo.thumbnail.extension}`}
                                alt={comicInfo.title}>
                            </Image>
                        }
                        <Name modal>{comicInfo.title}</Name>
                    </ModalHeaderWrapper>
                </Modal.Header>

                <Modal.Body>
                    {
                        comicInfo.description &&
                        <div>
                            <Name>Description</Name>
                            <ModalDescription>{comicInfo.description}</ModalDescription>
                        </div>
                    }
                </Modal.Body>


                <Modal.Body>
                    <Name>Specification</Name>
                    {
                        <ModalDescription>Issue: {comicInfo.issueNumber == 0 ? 'Unknown' : comicInfo.issueNumber}</ModalDescription>
                    }
                    {
                        <ModalDescription>
                            Number of Pages: {comicInfo.pageCount == 0 ? 'Unknown' : comicInfo.pageCount}
                        </ModalDescription>
                    }
                </Modal.Body>

                <Modal.Body>
                    <Name>Characters</Name>
                        {
                            comicInfo.characters.items.length > 0 
                            &&
                            comicInfo.characters.items.map((item, i) => {
                                return (
                                <ModalCharacterWrapper key={i}>
                                    <ModalDescription>{item.name}</ModalDescription>
                                        <Link to={ `/hero/${stripId(item.resourceURI)}` }>
                                        <Button
                                            className="btn"
                                            theme={{ backgroundColor: '#F4B350' }}
                                            onClick={handleReadMore}
                                        >
                                            View
                                        </Button>
                                        </Link>
                                </ModalCharacterWrapper>
                                )
                            })
                        }
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className="btn"
                        theme={{ backgroundColor: '#D91E18' }}
                        onClick={handleReadMore}
                    >
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
};

export default ComicInfoModal;