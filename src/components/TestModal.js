import React from 'react';
import { Modal, Popover, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Example = ({ show, handleReadMore }) => {
    return (
        <div>
            <Modal show={show} onHide={handleReadMore}>

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
                        comicInfo.issueNumber &&
                        <ModalDescription>Issue: {comicInfo.issueNumber}</ModalDescription>
                    }
                    {
                        comicInfo.pageCount &&
                        <ModalDescription>Page Number: {comicInfo.pageCount}</ModalDescription>
                    }
                </Modal.Body>

                <Modal.Body>
                    <Name>Characters</Name>
                    <ModalCharacterWrapper>
                        <ModalDescription>Thor</ModalDescription>
                        <Button
                            className="btn"
                            theme={{ backgroundColor: '#F4B350' }}
                        >
                            View
                        </Button>
                    </ModalCharacterWrapper>
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

export default Example;